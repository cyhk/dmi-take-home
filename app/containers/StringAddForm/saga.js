import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { ADD_STRING } from './constants';

import { stringAdded, stringAddingError } from './actions';

export default function* addStringWatcherSaga() {
  yield takeLatest(ADD_STRING, addStringWorkerSaga);
}

/**
 *  add string to server
 *
 * Input: { string } (passed from action)
 */
export function* addStringWorkerSaga({ string }) {
  try {
    const response = yield call(addStringThroughApi, string);
    const { strings } = response.data;

    yield put(stringAdded(strings));
  } catch (error) {
    yield put(stringAddingError(error));
  }
}

/**
 * Helper function to add string to server
 */
function addStringThroughApi(string) {
  return axios.post('/api/strings', { string });
}
