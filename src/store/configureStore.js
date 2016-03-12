/* global require module*/
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/root';

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    module.hot.accept('../reducers/root.js', () => {
      const nextRootReducer = require('../reducers/root.js').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
