import {
  selectAddString,
  makeSelectUpdating,
  makeSelectUpdated,
  makeSelectStringAddError,
} from '../selectors';

describe('selectAddString', () => {
  it('should select the addString state', () => {
    const addStringState = {
      strings: null,
      updating: false,
      updated: false,
      error: null,
    };
    const mockedState = {
      stringAddForm: addStringState,
    };
    expect(selectAddString(mockedState)).toEqual(addStringState);
  });
});

describe('makeSelectUpdating', () => {
  const updatingSelector = makeSelectUpdating();
  it('should select updating', () => {
    const updating = true;
    const mockedState = {
      stringAddForm: {
        updating,
      },
    };
    expect(updatingSelector(mockedState)).toEqual(updating);
  });
});

describe('makeSelectUpdated', () => {
  const updatedSelector = makeSelectUpdated();
  it('should select updated', () => {
    const updated = true;
    const mockedState = {
      stringAddForm: {
        updated,
      },
    };
    expect(updatedSelector(mockedState)).toEqual(updated);
  });
});

describe('makeSelectStringAddError', () => {
  const errorSelector = makeSelectStringAddError();
  it('should select the error', () => {
    const error = new Error('TestError');
    const mockedState = {
      stringAddForm: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
