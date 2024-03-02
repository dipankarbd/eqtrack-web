import * as ActionTypes from '../actions/types';

const defaultState = false;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_FEED:
    case ActionTypes.SET_REFRESH_INTERVAL:
    case ActionTypes.START_REFRESH:
      return true;
    case ActionTypes.STOP_REFRESH:
    case ActionTypes.UPDATE_DATA:
      return false;
    default:
      return state;
  }
};

export default reducer;
