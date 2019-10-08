/**
 * Tests for StringsList sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_STRINGS } from '../constants';
import { stringsLoaded, stringsLoadingError } from '../actions';

import getStringsWatcherSaga, { getStringsWorkerSaga } from '../saga';

const string = 'test';

/* eslint-disable redux-saga/yield-effects */
describe('getStringsWorkerSaga', () => {
  let getStringsWorkerGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStringsWorkerGenerator = getStringsWorkerSaga();

    const callDescriptor = getStringsWorkerGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringAdded action if it posts the data successfully', () => {
    const stringsMock = [string];
    const responseMock = {
      data: { strings: stringsMock },
    };
    const putDescriptor = getStringsWorkerGenerator.next(responseMock).value;
    expect(putDescriptor).toEqual(put(stringsLoaded(stringsMock)));
  });

  it('should call the stringAddingError action if the response errors', () => {
    const response = new Error('TestError');
    const putDescriptor = getStringsWorkerGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringsLoadingError(response)));
  });
});

describe('getStringsWatcherSaga', () => {
  const getStringsWatcher = getStringsWatcherSaga();

  it('should start task to watch for ADD_STRING action', () => {
    const takeLatestDescriptor = getStringsWatcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(GET_STRINGS, getStringsWorkerSaga),
    );
  });
});
