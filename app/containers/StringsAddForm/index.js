/**
 * StringsAddForm
 *
 * This component is loaded when the user reaches the /strings/new page
 *
 */

import React, { useState } from 'react';
import NavBar from '../NavBar/Loadable';

export default function StringsAddForm() {
  const [string, setString] = useState('');

  const handleChange = evt => {
    setString(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // dispatch to change state here

    setString('');
  };

  return (
    <React.Fragment>
      <NavBar />
      <form>
        <label htmlFor="string">New String:</label>
        <input
          name="String"
          id="string"
          type="text"
          value={string}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </React.Fragment>
  );
}

// connect to redux store here
