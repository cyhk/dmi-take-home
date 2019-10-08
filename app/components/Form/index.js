import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import UpdateMessage from '../UpdateMessage';

const Form = props => {
  const { inputGroups, submitButton, updateStatus } = props;

  const inputs = inputGroups.map(inputGroup => {
    const { label, input } = inputGroup;
    return (
      <div key={label.htmlFor}>
        <Label htmlFor={label.htmlFor}>{label.name}</Label>
        <Input
          name={input.name}
          id={input.id}
          type={input.type}
          value={input.value}
          onChange={input.onChange}
        />
      </div>
    );
  });

  return (
    <Wrapper>
      {inputs}
      <Button type={submitButton.type} onClick={submitButton.onClick}>
        {submitButton.name}
      </Button>
      {updateStatus && <UpdateMessage>{updateStatus}</UpdateMessage>}
    </Wrapper>
  );
};

Form.propTypes = {
  inputGroups: PropTypes.array,
  submitButton: PropTypes.object,
  updateStatus: PropTypes.string,
};

export default Form;
