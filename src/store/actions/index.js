import * as ActionTypes from './types';

export const setFeed = (feed) => ({
  type: ActionTypes.SET_FEED,
  payload: feed,
});

export const setRefreshInterval = (interval) => ({
  type: ActionTypes.SET_REFRESH_INTERVAL,
  payload: interval,
});

export const startRefresh = () => ({
  type: ActionTypes.START_REFRESH,
});

export const stopRefresh = () => ({
  type: ActionTypes.STOP_REFRESH,
});

export const selectEvent = (event) => ({
  type: ActionTypes.SELECT_EVENT,
  payload: event,
});
