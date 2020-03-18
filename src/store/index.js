import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };

  const store =  createStore(
    rootReducer,
    initialState,
    bindMiddleware([
      thunkMiddleware,
      sagaMiddleware
    ]));
  sagaMiddleware.run(rootSagas);
  return store;
};

export { makeStore };
