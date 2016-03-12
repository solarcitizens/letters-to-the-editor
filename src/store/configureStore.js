/* global require module*/
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/root';

const configureStore = initialState => {
  const createStoreWithDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
  const store = createStoreWithDevTools(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/root.js', () => {
      const nextRootReducer = require('../reducers/root.js').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
