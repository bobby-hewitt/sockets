export const addPlayer = (payload) => {
  return dispatch => {
    dispatch({
      type: 'ADD_PLAYER',
      payload: payload
    })
  }
}

export const removePlayer = () => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_PLAYER'
    })
  }
}

