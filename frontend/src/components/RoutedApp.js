import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './app';

const RoutedApp = () => (
  <Router history={browserHistory}>
    <Route component={App} path="/campaigns/:campaignName"/>
  </Router>
);

export default RoutedApp;
