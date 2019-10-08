import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_FAILURE,
} from './constants';

export const initialState = {
  strings: null,
  fetching: false,
  error: null,
};

const stringsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STRINGS:
      return { ...state, fetching: true, error: null };
    case GET_STRINGS_SUCCESS:
      return { ...state, fetching: false, strings: action.strings };
    case GET_STRINGS_FAILURE:
      return { ...state, fetching: false, strings: null, error: action.error };
    default:
      return state;
  }
};

export default stringsListReducer;
