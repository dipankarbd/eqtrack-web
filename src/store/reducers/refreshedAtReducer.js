import * as ActionTypes from '../actions/types';

const defaultState = null;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_REFRESHED_AT_TIME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
