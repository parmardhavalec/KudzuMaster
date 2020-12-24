/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import reducer from './pages/HomeScreen/reducer/reducer';

import HomeScreen from './pages/HomeScreen';
import Routes from './route';

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
