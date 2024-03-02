import { parseFeatures } from '../../utils/parse';
import * as ActionTypes from '../actions/types';

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return parseData(action.payload);
    default:
      return state;
  }
};

const parseData = (data) => {
  const features = parseFeatures(data);
  return features;
};

export default reducer;
