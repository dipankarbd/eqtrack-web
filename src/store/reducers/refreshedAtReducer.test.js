import * as ActionTypes from '../actions/types';
import refreshedAtReducer from './refreshedAtReducer';

describe('refreshedAt reducer', () => {
  it('returns updated time for set refreshed at time action', () => {
    const date = new Date();
    const action = { type: ActionTypes.SET_REFRESHED_AT_TIME, payload: date };
    const response = refreshedAtReducer(null, action);
    expect(response).not.toBe(null);
    expect(response).toBe(date);
  });
});
