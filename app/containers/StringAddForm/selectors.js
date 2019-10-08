/**
 * Selectors from StringsAddForm
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddString = state => state.stringAddForm || initialState;

const makeSelectUpdating = () =>
  createSelector(
    selectAddString,
    addStringsState => addStringsState.updating,
  );

const makeSelectUpdated = () =>
  createSelector(
    selectAddString,
    addStringsState => addStringsState.updated,
  );

const makeSelectStringAddError = () =>
  createSelector(
    selectAddString,
    addStringsState => addStringsState.error,
  );

export {
  selectAddString,
  makeSelectUpdating,
  makeSelectUpdated,
  makeSelectStringAddError,
};
