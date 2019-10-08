import { GET_STRINGS_SUCCESS, GET_STRINGS_FAILURE } from './constants';

/**
 * Passes along strings array
 */
export function stringsLoaded(strings) {
  return { type: GET_STRINGS_SUCCESS, strings };
}

/**
 * Passes along error
 */
export function stringsLoadingError(error) {
  return { type: GET_STRINGS_FAILURE, error };
}
