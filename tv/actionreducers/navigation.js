
const initialState = {
  x: 0,
  y:0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LEFT':
      return {
        ...state,
        x: state.x > 0 ? state.x - 1 : 0,
      }
    case 'UP':
      return {
        ...state,
        y: state.y > 0 ? state.y - 1 : 0,
      }
    default:
      return state
  }
}

