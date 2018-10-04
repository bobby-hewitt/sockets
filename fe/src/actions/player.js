export const setPlayerRoom = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_PLAYER_ROOM',
      payload
    })
  }
}


export const setSelf = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SET_SELF',
      payload
    })
  }
}
