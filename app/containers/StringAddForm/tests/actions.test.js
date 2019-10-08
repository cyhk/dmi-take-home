import { ADD_STRING_SUCCESS, ADD_STRING_FAILURE } from '../constants';

import { stringAdded, stringAddingError } from '../actions';

describe('StringAddForm actions', () => {
  describe('stringAdded', () => {
    it('should return the correct type and the passed array', () => {
      const fixture = ['test1', 'test2'];
      const expectedResult = {
        type: ADD_STRING_SUCCESS,
        strings: fixture,
      };

      expect(stringAdded(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringAddingError', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'TestError';
      const expectedResult = {
        type: ADD_STRING_FAILURE,
        error: fixture,
      };

      expect(stringAddingError(fixture)).toEqual(expectedResult);
    });
  });
});
