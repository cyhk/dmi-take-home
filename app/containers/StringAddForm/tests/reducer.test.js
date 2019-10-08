import stringAddFormReducer from '../reducer';
import { ADD_STRING } from '../constants';
import { stringAdded, stringAddingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('stringAddFormReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      updating: false,
      updated: false,
      error: null,
      strings: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(stringAddFormReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the ADD_STRING action correctly', () => {
    const fixture = 'newString';
    const expectedResult = {
      updating: true,
      updated: false,
      error: null,
      strings: null,
    };

    expect(
      stringAddFormReducer(state, { type: ADD_STRING, string: fixture }),
    ).toEqual(expectedResult);
  });

  it('should handle the stringAdded action correctly', () => {
    const fixture = ['newString'];
    const expectedResult = {
      updating: false,
      updated: true,
      error: null,
      strings: fixture,
    };

    expect(stringAddFormReducer(state, stringAdded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringAddingError action correctly', () => {
    const fixture = new Error('TestError');
    const expectedResult = {
      updating: false,
      updated: true,
      error: fixture,
      strings: null,
    };

    expect(stringAddFormReducer(state, stringAddingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
