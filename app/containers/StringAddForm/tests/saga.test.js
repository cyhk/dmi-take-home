/**
 * Tests for StringAddForm sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { ADD_STRING } from '../constants';
import { stringAdded, stringAddingError } from '../actions';

import addStringWatcherSaga, { addStringWorkerSaga } from '../saga';

const string = 'test';

/* eslint-disable redux-saga/yield-effects */
describe('addStringWorkerSaga', () => {
  let addStringWorkerGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    addStringWorkerGenerator = addStringWorkerSaga({ string });

    const callDescriptor = addStringWorkerGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringAdded action if it posts the data successfully', () => {
    const stringsMock = [string];
    const responseMock = {
      data: { strings: stringsMock },
    };
    const putDescriptor = addStringWorkerGenerator.next(responseMock).value;
    expect(putDescriptor).toEqual(put(stringAdded(stringsMock)));
  });

  it('should call the stringAddingError action if the response errors', () => {
    const response = new Error('TestError');
    const putDescriptor = addStringWorkerGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringAddingError(response)));
  });
});

describe('addStringWatcherSaga', () => {
  const addStringWatcher = addStringWatcherSaga();

  it('should start task to watch for ADD_STRING action', () => {
    const takeLatestDescriptor = addStringWatcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(ADD_STRING, addStringWorkerSaga),
    );
  });
});
