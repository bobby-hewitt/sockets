
const initialState = {
  roomCode: null
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ROOM_CODE':
      return {
        ...state,
        roomCode: action.payload,
      }
    default:
      return state
  }
}

