export const setRoomCode = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_ROOM_CODE',
      payload: payload
    })
  }
}

