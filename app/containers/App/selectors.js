import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectStringsList = state => state.stringsList || initialState;
const selectAddString = state => state.stringAddForm || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

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

const makeSelectUpdating = () =>
  createSelector(
    selectAddString,
    addStringsState => addStringsState.updating,
  );

const makeSelectStringsError = () =>
  createSelector(
    selectStringsList,
    stringsState => stringsState.error,
  );

export {
  selectStringsList,
  selectAddString,
  makeSelectLocation,
  makeSelectStrings,
  makeSelectFetching,
  makeSelectUpdating,
  makeSelectStringsError,
};
