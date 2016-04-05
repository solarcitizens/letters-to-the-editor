// @flow
import React from 'react';
import { connect } from 'react-redux';

export const App = () => (
  <div>
    <h1>Example app</h1>
    <p>It works!</p>
  </div>
);

App.propTypes = {
  dispatch: React.PropTypes.func,
  exampleState: React.PropTypes.object
};

export default connect(state => state)(App);
