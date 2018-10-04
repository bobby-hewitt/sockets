
const initialState = {
  players: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      let newPlayers = Object.assign([], state.players)
      newPlayers.push(action.payload)
      console.log(newPlayers)
      return {
        ...state,
        players: newPlayers,
      }
    default:
      return state
  }
}

