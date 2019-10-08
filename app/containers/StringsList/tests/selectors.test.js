import {
  selectStringsList,
  makeSelectStrings,
  makeSelectFetching,
  makeSelectStringsError,
} from '../selectors';

describe('selectAddString', () => {
  it('should select the stringsList state', () => {
    const stringsListState = {
      strings: null,
      fetching: false,
      error: null,
    };
    const mockedState = {
      stringsList: stringsListState,
    };
    expect(selectStringsList(mockedState)).toEqual(stringsListState);
  });
});

describe('makeSelectStrings', () => {
  const stringsSelector = makeSelectStrings();
  it('should select strings', () => {
    const strings = ['test1', 'test2'];
    const mockedState = {
      stringsList: {
        strings,
      },
    };
    expect(stringsSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectFetching', () => {
  const fetchingSelector = makeSelectFetching();
  it('should select updated', () => {
    const fetching = true;
    const mockedState = {
      stringsList: {
        fetching,
      },
    };
    expect(fetchingSelector(mockedState)).toEqual(fetching);
  });
});

describe('makeSelectStringsError', () => {
  const errorSelector = makeSelectStringsError();
  it('should select the error', () => {
    const error = new Error('TestError');
    const mockedState = {
      stringsList: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
