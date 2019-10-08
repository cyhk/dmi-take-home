import { ADD_STRING_SUCCESS, ADD_STRING_FAILURE } from './constants';

/**
 * Passes along strings array
 */
export function stringAdded(strings) {
  return { type: ADD_STRING_SUCCESS, strings };
}

/**
 * Passes along error
 */
export function stringAddingError(error) {
  return { type: ADD_STRING_FAILURE, error };
}
