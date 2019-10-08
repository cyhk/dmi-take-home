import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { GET_STRINGS } from './constants';

import { stringsLoaded, stringsLoadingError } from './actions';

export default function* getStringsWatcherSaga() {
  yield takeLatest(GET_STRINGS, getStringsWorkerSaga);
}

/**
 *  gets strings from server
 */
export function* getStringsWorkerSaga() {
  try {
    const response = yield call(getStringsFromApi);
    const { strings } = response.data;

    if (!strings) throw new Error('There was a problem retrieving the strings');

    yield put(stringsLoaded(strings));
  } catch (error) {
    yield put(stringsLoadingError(error));
  }
}

/**
 * Helper function to get strings from server
 */
function getStringsFromApi() {
  return axios.get('/api/strings');
}
