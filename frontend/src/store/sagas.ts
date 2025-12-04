import { all, fork } from 'redux-saga/effects';
import { watchApiSagas } from '../features/api/apiSagas';

export default function* rootSaga() {
  yield all([
    fork(watchApiSagas),
  ]);
}
