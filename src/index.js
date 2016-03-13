// @flow
/* global require module*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();
const reactRoot = document.getElementById('react-root');

let render = () => {
  const App = require('./components/app.js').default;

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    reactRoot
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = error => {
    const RedBox = require('redbox-react');

    ReactDOM.render(<RedBox error={error}/>, reactRoot);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./components/app.js', () => {
    render();
  });
}

render();
