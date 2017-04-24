import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer'
//import createLogger from 'redux-logger'

function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(
       thunkMiddleware
      )
    );
  return createStore(reducer,initialState,enhancer);
}

const store = configureStore({});

import {
  AppRegistry
} from 'react-native';

const App = () => (
    <Provider store={store}>
      <AppContainer />
    </Provider>
);


AppRegistry.registerComponent('CartoonForKid', () => App);
