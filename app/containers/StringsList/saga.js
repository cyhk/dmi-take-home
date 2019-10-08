import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_STRINGS,
  // GET_STRINGS_SUCCESS,
  // GET_STRINGS_FAILURE,
} from './constants';

import { stringsLoaded, stringsLoadingError } from './actions';

export default function* getStringsWatcherSaga() {
  yield takeLatest(GET_STRINGS, getStringsWorkerSaga);
}

function* getStringsWorkerSaga() {
  try {
    const response = yield call(getStringsFromApi);
    const { strings } = response.data;

    if (!strings) throw new Error('There was a problem retrieving the strings');

    yield put(stringsLoaded(strings));
  } catch (error) {
    yield put(stringsLoadingError(error));
  }
}

function getStringsFromApi() {
  return axios.get('/api/strings');
}
