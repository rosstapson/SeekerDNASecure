/**
 * SeekerDNASecure 
 *  github url here...
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

const loggerMiddleWare = createLogger({predicate: (setState, action) => __DEV__});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleWare
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({randomQuote: ""});  //initial state!
import {
  AppRegistry,
} from 'react-native';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('SeekerDNASecure', () => App);
