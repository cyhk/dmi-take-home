import { GET_STRINGS_SUCCESS, GET_STRINGS_FAILURE } from './constants';

export function stringsLoaded(strings) {
  return { type: GET_STRINGS_SUCCESS, strings };
}

export function stringsLoadingError(error) {
  return { type: GET_STRINGS_FAILURE, error };
}
