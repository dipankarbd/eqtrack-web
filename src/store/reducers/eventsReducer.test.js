import { data } from '../../mockData';
import * as ActionTypes from '../actions/types';
import eventsReducer from './eventsReducer';

describe('events reducer', () => {
  it('returns events for updated data action', () => {
    const initialState = [];
    const action = { type: ActionTypes.UPDATE_DATA, payload: data };
    const response = eventsReducer(initialState, action);
    expect(response).not.toBeNull();
    expect(response.count).toBe(data.features.count);
  });

  it('returns existing events for other actions', () => {
    const initialState = data.features;
    const action = { type: 'other' };
    const response = eventsReducer(initialState, action);
    expect(response).toBe(initialState);
  });
});
