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
import Navigator from './navigator'
import SocketListener from './containers/SocketListener'
import { subscribeToSocketEvents } from './sockets'

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
        <View>
          <SocketListener />
          <Navigator />
        </View>
      </Provider>
    )
  }
}


AppRegistry.registerComponent('RNRedux', () => App);
