import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './actionreducers'

import Home from './containers/Home'

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({
  //provide initial state here
})

export default class App extends Component{

  constructor(props){
    super(props)
    
  }
  
  render(){
    return(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('RNRedux', () => App);
