import {
  put,
  call,
  take,
  select,
  delay,
  takeLatest,
  cancelled,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as Api from '../../apis';
import * as ActionTypes from '../actions/types';

let chnl = null;

export default function* refreshSaga() {
  yield console.log('running refresh saga');
  yield takeLatest(ActionTypes.SET_FEED, startRefresh);
  yield takeLatest(ActionTypes.SET_REFRESH_INTERVAL, startRefresh);
  yield takeLatest(ActionTypes.START_REFRESH, startRefresh);
  yield takeLatest(ActionTypes.STOP_REFRESH, stopRefresh);
}

function* startRefresh() {
  yield delay(500);
  yield console.log('should start refresh');

  const filter = yield select(getFilter);

  if (chnl) {
    chnl.close();
  }

  chnl = yield call(createRefreshChannel, filter);

  try {
    while (true) {
      const data = yield take(chnl);
      yield put({ type: ActionTypes.UPDATE_DATA, payload: data });
      yield put({
        type: ActionTypes.SET_REFRESHED_AT_TIME,
        payload: new Date(),
      });
    }
  } finally {
    if (yield cancelled()) {
      chnl.close();
    }
  }
}

function* stopRefresh() {
  yield delay(500);
  yield console.log('should stop refresh');
  if (chnl) {
    chnl.close();
  }
}

const getFilter = (state) => state.filter;

const createRefreshChannel = (filter) => {
  const feed = filter.feed;
  const interval = parseInt(filter.refreshInterval) * 1000;

  return eventChannel((emitter) => {
    const fetchAndEmit = () => {
      const response = fetchData(feed);
      response.then((response) => {
        emitter(response.data);
      });
    };

    const timer = setInterval(() => {
      fetchAndEmit();
    }, interval);

    fetchAndEmit();

    return () => {
      clearInterval(timer);
    };
  });
};

const fetchData = (feed) => {
  if (feed === 'hour') {
    return Api.fetchPastHour();
  } else if (feed === 'day') {
    return Api.fetchPastDay();
  } else if (feed === 'week') {
    return Api.fetchPast7Days();
  }

  return Api.fetchPastHour();
};
