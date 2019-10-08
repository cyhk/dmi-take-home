/**
 * StringAddForm
 *
 * This component is loaded when the user reaches the /strings/new page
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectUpdating } from 'containers/App/selectors';
import { compose } from 'redux';
import { ADD_STRING } from './constants';

import Form from '../../components/Form';

import reducer from './reducer';
import saga from './saga';

const key = 'stringAddForm';

const StringAddForm = ({ updating, addString }) => {
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

  const submitButton = {
    type: 'submit',
    onClick: handleSubmit,
    name: 'Add',
  };

  let updateStatus = null;

  if (updating === 'updating') {
    updateStatus = 'Updating...';
  } else if (updating === 'failed') {
    updateStatus = 'There was an error adding the string...';
  } else if (updating === 'finished') {
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
});

const mapDispatchToProps = dispatch => ({
  addString: string => dispatch({ type: ADD_STRING, string }),
});

StringAddForm.propTypes = {
  updating: PropTypes.string,
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
