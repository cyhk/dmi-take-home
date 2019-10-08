import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { ADD_STRING } from './constants';

import { stringAdded, stringAddingError } from './actions';

export default function* addStringWatcherSaga() {
  yield takeLatest(ADD_STRING, addStringWorkerSaga);
}

function* addStringWorkerSaga({ string }) {
  try {
    const response = yield call(addStringThroughApi, string);
    const { strings } = response.data;

    yield put(stringAdded(strings));
  } catch (error) {
    yield put(stringAddingError(error));
  }
}

function addStringThroughApi(string) {
  return axios.post('/api/strings', { string });
}
