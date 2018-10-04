import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import host from './host'
import player from './player'


export default combineReducers({
  routing: routerReducer,
  counter,
  player,
  host
}) 