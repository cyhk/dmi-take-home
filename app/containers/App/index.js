/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from 'containers/NavBar/Loadable';
import StringsList from 'containers/StringsList/Loadable';
import StringAddForm from 'containers/StringAddForm/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/strings" />
        </Route>
        <Route exact path="/strings" component={StringsList} />
        <Route exact path="/strings/new" component={StringAddForm} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
