import actionResolvers from './action-resolvers'

const initialState = {
  cards: [],
  flippedCards: [],
  isGameEnd: false,
  numberOfGuesses: 0,
  points: 0,
  gameStart: '',
  gameEnd: ''
}

const gameplayReducer = (currentState = initialState, { type, payload } = {}) => {
  const actionResolver = type ? actionResolvers[type] : null

  return actionResolver ? actionResolver(currentState, payload) : currentState
}

export default gameplayReducer
