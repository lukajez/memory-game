import GameplayActionTypes from './action-types'

const {
  gameSetupType,
  flipCardType,
  compareFlippedCardType,
  restartGameType,
  calculatePointsType,
  setGameEndType
} = GameplayActionTypes

export const gameSetupAction = payload => ({
  type: gameSetupType,
  payload
})

export const flipCardAction = payload => ({
  type: flipCardType,
  payload
})

export const compareFlippedCardsAction = () => ({
  type: compareFlippedCardType
})

export const restartGameAction = payload => ({
  type: restartGameType,
  payload
})

export const calculatePointsAction = payload => ({
  type: calculatePointsType,
  payload
})

export const setGameEndAction = payload => ({
  type: setGameEndType,
  payload
})
