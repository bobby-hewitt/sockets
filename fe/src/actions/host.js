export const setRoomCode = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_ROOM_CODE',
      payload
    })
  }
}

export const setResponses = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_RESPONSES',
      payload
    })
  }
}

export const addPlayer = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_PLAYER',
      payload
    })
  }
}


export const startRoundHost = (payload) => {
	console.log('start round host')
  return dispatch => {
    dispatch({
      type: 'START_ROUND_HOST',
      payload
    })
  }
}