import { combineReducers } from 'redux'
import counter from './counter'
import roomCode from './roomCode'


export default combineReducers({
  counter,
  roomCode
}) 