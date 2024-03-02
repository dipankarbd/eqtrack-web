import * as ActionTypes from '../actions/types';
import filterReducer from './filterReducer';

describe('filter reducer', () => {
  it('returns state with updated feed', () => {
    const initialState = { feed: 'hour', refreshInterval: '180' };
    const action = { type: ActionTypes.SET_FEED, payload: 'day' };
    const response = filterReducer(initialState, action);
    expect(response).not.toBeNull();
    expect(response.feed).toBe('day');
    expect(response.refreshInterval).toBe('180');
  });

  it('returns state with updated time', () => {
    const initialState = { feed: 'hour', refreshInterval: '180' };
    const action = { type: ActionTypes.SET_REFRESH_INTERVAL, payload: '60' };
    const response = filterReducer(initialState, action);
    expect(response).not.toBeNull();
    expect(response.feed).toBe('hour');
    expect(response.refreshInterval).toBe('60');
  });

  it('returns existing filter state for other actions', () => {
    const initialState = { feed: 'hour', refreshInterval: '180' };
    const action = { type: 'other' };
    const response = filterReducer(initialState, action);
    expect(response).toBe(initialState);
  });
});
