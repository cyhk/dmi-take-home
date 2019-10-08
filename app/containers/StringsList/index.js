/**
 * StringsList
 *
 * This component is loaded when the user reaches the /strings page
 *
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { compose } from 'redux';
import {
  makeSelectStrings,
  makeSelectFetching,
  makeSelectStringsError,
} from 'containers/App/selectors';
import { GET_STRINGS } from './constants';

import List from '../../components/List';
import LoadingSpinner from '../../components/LoadingSpinner';

import reducer from './reducer';
import saga from './saga';

const key = 'stringsList';

const StringsList = ({ strings, fetching, error, getStrings }) => {
  useInjectSaga({ key, saga });
  const [stringsLength, setStringLength] = useState(0);

  if (strings && stringsLength !== strings.length)
    setStringLength(strings.length);

  useEffect(() => {
    getStrings();
  }, []);

  return (
    <React.Fragment>
      {fetching && <LoadingSpinner />}
      {!fetching && strings && <List items={strings} />}
      {!fetching && error && (
        <div>There was an error trying to fetch the strings...</div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  fetching: makeSelectFetching(),
  error: makeSelectStringsError(),
});

const mapDispatchToProps = dispatch => ({
  getStrings: () => dispatch({ type: GET_STRINGS }),
});

StringsList.propTypes = {
  strings: PropTypes.array,
  fetching: PropTypes.bool,
  error: PropTypes.string,
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
