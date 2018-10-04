import { combineReducers } from 'redux'
import counter from './counter'
import roomCode from './roomCode'
import players from './players'


export default combineReducers({
  counter,
  roomCode,
  players
}) 