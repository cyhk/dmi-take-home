/**
 * StringsList
 *
 * This component is loaded when the user reaches the /strings page
 *
 */

import React from 'react';
import NavBar from '../NavBar/Loadable';

export default function StringsList() {
  return (
    <React.Fragment>
      <NavBar />
      <div>This is where all the strings should be displayed</div>
    </React.Fragment>
  );
}

// connect to redux store here
