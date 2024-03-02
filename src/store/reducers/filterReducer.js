import * as ActionTypes from '../actions/types';

const defaultState = {
  feed: 'hour',
  refreshInterval: '180',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_FEED:
      return { ...state, feed: action.payload };
    case ActionTypes.SET_REFRESH_INTERVAL:
      return { ...state, refreshInterval: action.payload };
    default:
      return state;
  }
};

export default reducer;
