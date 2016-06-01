import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.js';

const RoutedApp = () => (
  <Router history={browserHistory}>
    <Route component={App} path="/campaigns/:campaignName"/>
  </Router>
);

export default RoutedApp;
