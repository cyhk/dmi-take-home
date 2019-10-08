/**
 * StringsList
 *
 * This component is loaded when the user reaches the /strings page
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectFetching,
  makeSelectStringsError,
} from './selectors';
import { GET_STRINGS } from './constants';

import List from '../../components/List';
import LoadingMessage from '../../components/LoadingMessage';

import reducer from './reducer';
import saga from './saga';

const key = 'stringsList';

export function StringsList({ strings, fetching, error, getStrings }) {
  useInjectSaga({ key, saga });

  // get strings from API with useEffect
  useEffect(() => {
    getStrings();
  }, []);

  return (
    <React.Fragment>
      {fetching && <LoadingMessage />}
      {!fetching && strings && <List items={strings} />}
      {!fetching && error && (
        <div>There was an error trying to fetch the strings...</div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  fetching: makeSelectFetching(),
  error: makeSelectStringsError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getStrings: () => dispatch({ type: GET_STRINGS }),
  };
}

StringsList.propTypes = {
  strings: PropTypes.array,
  fetching: PropTypes.bool,
  error: PropTypes.object,
  getStrings: PropTypes.func,
};

// I attempted to use the useInjectReducer hook, but it was not
// loading the state and I have yet to figure out the bug,
// so I am using the older injectReducer here instead
const withReducer = injectReducer({ key, reducer });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
)(StringsList);
