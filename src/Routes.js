import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Vote from './Vote';
import Donate from './Donate';
import Petitions from './Petitions';
import Surveys from './Surveys';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/vote'>
        <Vote />
      </Route>

      <Route exact path='/donate'>
        <Donate />
      </Route>

      <Route exact path='/petitions'>
        <Petitions />
      </Route>

      <Route exact path='/survey'>
        <Surveys />
      </Route>

      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
