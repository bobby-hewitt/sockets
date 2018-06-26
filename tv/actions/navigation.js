export const up = () => {
  return dispatch => {
    dispatch({
      type: 'UP'
    })
  }
}
export const down = () => {
  return dispatch => {
    dispatch({
      type: 'DOWN'
    })
  }
}
export const left = () => {
  return dispatch => {
    dispatch({
      type: 'LEFT'
    })
  }
}
export const right = () => {
  return dispatch => {
    dispatch({
      type: 'RIGHT'
    })
  }
}

