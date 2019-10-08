import { ADD_STRING_SUCCESS, ADD_STRING_FAILURE } from './constants';

export function stringAdded(strings) {
  return { type: ADD_STRING_SUCCESS, strings };
}

export function stringAddingError(error) {
  return { type: ADD_STRING_FAILURE, error };
}
