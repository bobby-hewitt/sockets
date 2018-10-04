
const initialState = {
  room: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_ROOM':
      return {
        ...state,
        room: action.payload,
      }
    case 'SET_SELF':
      return {
        ...state,
        self: action.payload,
      }
    default:
      return state
  }
}

