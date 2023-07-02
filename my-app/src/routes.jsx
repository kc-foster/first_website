import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './about';

function Routes() {
  return (
    <Switch>
      <Route exact path="/#home" component={HomePage} />
      <Route path="/#about" component={AboutPage} />
    </Switch>
  );
}

export default Routes;
