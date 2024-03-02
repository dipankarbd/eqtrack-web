import { parseFeatures } from '../../utils/parse';
import * as ActionTypes from '../actions/types';

const defaultState = null;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_FEED:
    case ActionTypes.SET_REFRESH_INTERVAL:
    case ActionTypes.START_REFRESH:
      return defaultState;
    case ActionTypes.UPDATE_DATA:
      return parseData(action.payload);
    case ActionTypes.SELECT_EVENT:
      return action.payload;
    default:
      return state;
  }
};

const parseData = (data) => {
  const features = parseFeatures(data);
  return features.length > 0 ? features[0] : null;
};

export default reducer;
