/**
 * Test the StringsList
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { StringsList, mapDispatchToProps } from '../index';
import { GET_STRINGS } from '../constants';
import configureStore from '../../../configureStore';

describe('<StringsList />', () => {
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
          <StringsList
            strings={null}
            fetching={false}
            error={null}
            getStrings={jest.fn()}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('getStrings', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getStrings).toBeDefined();
      });

      it('should dispatch GET_STRINGS when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.getStrings();
        expect(dispatch).toHaveBeenCalledWith({ type: GET_STRINGS });
      });
    });
  });
});
