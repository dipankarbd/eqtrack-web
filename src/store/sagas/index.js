import { all } from 'redux-saga/effects';
import refreshSaga from './refresh';

export function* mainSaga() {
  yield all([refreshSaga()]);
}
