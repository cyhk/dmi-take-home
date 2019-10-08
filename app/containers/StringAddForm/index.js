/**
 * StringAddForm
 *
 * This component is loaded when the user reaches /strings/new
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectUpdating,
  makeSelectUpdated,
  makeSelectStringAddError,
} from './selectors';
import { ADD_STRING } from './constants';

import Form from '../../components/Form';

import reducer from './reducer';
import saga from './saga';

const key = 'stringAddForm';

const StringAddForm = ({ updating, updated, error, addString }) => {
  useInjectSaga({ key, saga });

  const [string, setString] = useState('');

  // for updating state for controlled form
  const handleChange = evt => {
    setString(evt.target.value);
  };

  // for handling submission
  const handleSubmit = evt => {
    evt.preventDefault();

    if (string === '') return;

    addString(string);

    setString('');
  };

  // define input fields
  const inputGroups = [
    {
      label: { htmlFor: 'string', name: 'New string:' },
      input: {
        name: 'String',
        id: 'string',
        type: 'text',
        value: string,
        onChange: handleChange,
      },
    },
  ];

  // define submit button behavior
  const submitButton = {
    type: 'submit',
    onClick: handleSubmit,
    name: 'Add',
  };

  // define update status message
  let updateStatus = null;

  if (updating && !updated) {
    updateStatus = 'Updating...';
  } else if (!updating && updated && error) {
    updateStatus = 'There was an error adding the string...';
  } else if (!updating && updated) {
    updateStatus = 'String added!';
  }

  return (
    <React.Fragment>
      <Form
        inputGroups={inputGroups}
        submitButton={submitButton}
        updateStatus={updateStatus}
      />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  updating: makeSelectUpdating(),
  updated: makeSelectUpdated(),
  error: makeSelectStringAddError(),
});

const mapDispatchToProps = dispatch => ({
  addString: string => dispatch({ type: ADD_STRING, string }),
});

StringAddForm.propTypes = {
  updating: PropTypes.bool,
  updated: PropTypes.bool,
  error: PropTypes.string,
  addString: PropTypes.func,
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
)(StringAddForm);
