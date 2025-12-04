import { takeLatest, put, call } from 'redux-saga/effects';
import { setApiInfo } from './apiSlice';

// Example saga for additional side effects
function* handleApiInfoFetched() {
  yield; // Required for generator function
  console.log('API info fetch triggered via saga');
}

// Watcher saga
export function* watchApiSagas() {
  yield takeLatest('api/fetchInfo/fulfilled', handleApiInfoFetched);
}

// Example of a more complex saga with API call
export function* fetchApiInfoSaga() {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const response: Response = yield call(fetch, `${apiUrl}/api/info`);
    const data: { name: string; version: string; description: string } = yield call([response, 'json']);
    yield put(setApiInfo(data));
  } catch (error) {
    console.error('Saga error:', error);
  }
}
