/**
 * Test the StringAddForm
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringAddForm, mapDispatchToProps } from '../index';
import { ADD_STRING } from '../constants';
import configureStore from '../../../configureStore';

describe('<StringAddForm />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringAddForm updating={false} updated={false} error={null} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  // Because the component was written as a functional component,
  // it is difficult to unit test handleChange and handleSubmit.
  // I have written integration tests to test the functionality of
  // these two functions. React-testing-library also emphasises
  // integration tests, so it would be more fitting if we follow
  // their testing philosophy
  it('should update the input field when it is changed', () => {
    const component = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringAddForm updating={false} updated={false} error={null} />
        </IntlProvider>
      </Provider>,
    );

    const input = component.getByLabelText('New string:');
    fireEvent.change(input, { target: { value: 'testing!' } });
    expect(input.value).toBe('testing!');
  });

  it('should reset the input field when the submit button is clicked', () => {
    const component = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <StringAddForm updating={false} updated={false} error={null} />
        </IntlProvider>
      </Provider>,
    );

    const input = component.getByLabelText('New string:');
    const button = component.getByText('Add');

    fireEvent.click(button);

    expect(input.value).toBe('');
  });

  describe('mapDispatchToProps', () => {
    describe('addString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.addString).toBeDefined();
      });

      it('should dispatch ADD_STRING when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'test';
        result.addString(string);
        expect(dispatch).toHaveBeenCalledWith({ type: ADD_STRING, string });
      });
    });
  });
});
