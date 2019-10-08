import { GET_STRINGS_SUCCESS, GET_STRINGS_FAILURE } from '../constants';

import { stringsLoaded, stringsLoadingError } from '../actions';

describe('StringsList actions', () => {
  describe('stringsLoaded', () => {
    it('should return the correct type and the passed array', () => {
      const fixture = ['test1', 'test2'];
      const expectedResult = {
        type: GET_STRINGS_SUCCESS,
        strings: fixture,
      };

      expect(stringsLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringsLoadingError', () => {
    it('should return the correct type and the passed error', () => {
      const fixture = 'TestError';
      const expectedResult = {
        type: GET_STRINGS_FAILURE,
        error: fixture,
      };

      expect(stringsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
