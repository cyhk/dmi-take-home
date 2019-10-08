/**
 * Selectors from StringsList
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStringsList = state => state.stringsList || initialState;

const makeSelectStrings = () =>
  createSelector(
    selectStringsList,
    stringsState => stringsState.strings,
  );

const makeSelectFetching = () =>
  createSelector(
    selectStringsList,
    stringsState => stringsState.fetching,
  );

const makeSelectStringsError = () =>
  createSelector(
    selectStringsList,
    stringsState => stringsState.error,
  );

export {
  selectStringsList,
  makeSelectStrings,
  makeSelectFetching,
  makeSelectStringsError,
};
