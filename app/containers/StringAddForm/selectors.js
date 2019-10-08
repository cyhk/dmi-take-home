/**
 * Selectors from StringsAddForm
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddString = state => state.stringAddForm || initialState;

const makeSelectUpdating = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.updating,
  );

const makeSelectUpdated = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.updated,
  );

const makeSelectStringAddError = () =>
  createSelector(
    selectAddString,
    addStringState => addStringState.error,
  );

export {
  selectAddString,
  makeSelectUpdating,
  makeSelectUpdated,
  makeSelectStringAddError,
};
