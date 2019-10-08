import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
} from './constants';

export const initialState = {
  strings: null,
  updating: false,
  error: null,
};

const stringAddFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STRING:
      return { ...state, updating: 'updating', error: null };
    case ADD_STRING_SUCCESS:
      return { ...state, updating: 'finished', strings: action.strings };
    case ADD_STRING_FAILURE:
      return {
        ...state,
        updating: 'failed',
        strings: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default stringAddFormReducer;
