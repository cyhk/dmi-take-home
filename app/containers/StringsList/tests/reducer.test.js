import stringsListReducer from '../reducer';
import { GET_STRINGS } from '../constants';
import { stringsLoaded, stringsLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('stringsListReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      strings: null,
      fetching: false,
      error: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(stringsListReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the GET_STRINGS action correctly', () => {
    const expectedResult = {
      strings: null,
      fetching: true,
      error: null,
    };

    expect(stringsListReducer(state, { type: GET_STRINGS })).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringsLoaded action correctly', () => {
    const fixture = ['newString'];
    const expectedResult = {
      strings: fixture,
      fetching: false,
      error: null,
    };

    expect(stringsListReducer(state, stringsLoaded(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringsLoadingError action correctly', () => {
    const fixture = new Error('TestError');
    const expectedResult = {
      strings: null,
      fetching: false,
      error: fixture,
    };

    expect(stringsListReducer(state, stringsLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
