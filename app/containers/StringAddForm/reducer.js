/*
 * StringAddFormReducer
 *
 * This reducer takes care of actions relating to adding
 * strings to the database (ADD_STRING, ADD_STRING_SUCCESS,
 * and ADD_STRING_FAILURE)
 *
 */

import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
} from './constants';

export const initialState = {
  strings: null,
  updating: false,
  updated: false,
  error: null,
};

const stringAddFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return { ...state, updating: true, updated: false, error: null };
    case ADD_STRING_SUCCESS:
      return {
        ...state,
        updating: false,
        updated: true,
        strings: action.strings,
      };
    case ADD_STRING_FAILURE:
      return {
        ...state,
        updating: false,
        updated: true,
        strings: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default stringAddFormReducer;
