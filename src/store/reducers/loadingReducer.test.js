import * as ActionTypes from '../actions/types';
import loadingReducer from './loadingReducer';

describe('loading reducer', () => {
  it('returns true for set refresh interval and start refresh', () => {
    const action1 = { type: ActionTypes.SET_REFRESH_INTERVAL };
    const response1 = loadingReducer(false, action1);
    expect(response1).toBe(true);

    const action2 = { type: ActionTypes.START_REFRESH };
    const response2 = loadingReducer(false, action2);
    expect(response2).toBe(true);
  });

  it('returns false for update data and stop refresh', () => {
    const action1 = { type: ActionTypes.STOP_REFRESH };
    const response1 = loadingReducer(true, action1);
    expect(response1).toBe(false);

    const action2 = { type: ActionTypes.UPDATE_DATA };
    const response2 = loadingReducer(true, action2);
    expect(response2).toBe(false);
  });
});
