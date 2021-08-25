import { generateGameCards } from '../../../helpers/Memorize.helpers'
import GameplayActionTypes from './action-types'

const {
  gameSetupType,
  flipCardType,
  compareFlippedCardType,
  restartGameType,
  calculatePointsType,
  setGameEndType
} = GameplayActionTypes

const flipCardResolver = (currentState, payload = {}) => {
  const {
    flippedCards: currentFlippedCards = [],
    cards: currentCards = [],
    numberOfGuesses: currentNumberOfGuesses = 0
  } = currentState

  const { cardId } = payload

  const numOfFlippedCards = currentFlippedCards.length

  const areTwoCardsFlipped = numOfFlippedCards === 2
  const isClickedCardAlreadyFlipped = ~currentFlippedCards.findIndex(card => card.cardId === cardId)

  // if there is two flipped cards user should not be able to flip another card
  if (areTwoCardsFlipped || isClickedCardAlreadyFlipped) {
    return currentState
  }

  const newState = { ...currentState }
  const newCards = [...currentCards]
  let newFlippedCards = []
  const newNumberOfGuesses = currentNumberOfGuesses + 1

  const clickedCardIndex = currentCards.findIndex(card => card.cardId === cardId)

  const newFlippedCard = {
    cardIndex: clickedCardIndex, // cardIndex in source array
    card: currentCards[clickedCardIndex] // actual card data
  }

  newFlippedCards = [...currentFlippedCards, newFlippedCard]
  newCards[clickedCardIndex].flipped = true

  newState.cards = newCards
  newState.flippedCards = newFlippedCards
  newState.numberOfGuesses = newNumberOfGuesses

  return newState
}

const gameSetupResolver = (currentState, { difficulty = 'easy' } = {}) => {
  const newState = { ...currentState }
  // instead of using difficulty as payload read from logged user state
  newState.cards = generateGameCards(difficulty)
  newState.flippedCards = []
  newState.isGameEnd = false
  newState.numberOfGuesses = 0
  newState.points = 0
  newState.gameStart = new Date()

  return newState
}

const compareFlippedCardsResolver = currentState => {
  const {
    flippedCards: currentFlippedCards = [],
    cards: currentCards = []
  } = currentState

  const [
    { cardIndex: firstCardIndex, card: firstCard } = {},
    { cardIndex: secondCardIndex, card: secondCard } = {}
  ] = currentFlippedCards

  const newState = { ...currentState }

  const isMatch = firstCard.cardId === secondCard.pair

  const newCards = [...currentCards]

  newCards[firstCardIndex].discovered = isMatch
  newCards[firstCardIndex].flipped = isMatch

  newCards[secondCardIndex].discovered = isMatch
  newCards[secondCardIndex].flipped = isMatch

  const isGameEnd = newCards.filter(item => item.discovered).length === newCards.length

  newState.isGameEnd = isGameEnd
  newState.cards = newCards
  newState.flippedCards = []

  return newState
}

const restartGameResolver = (currentState, payload) => gameSetupResolver(currentState, payload)

const POINTS_CALCULATOR_BY_DIFFICULTY = {
  'easy': 1,
  'medium': 3,
  'hard': 6
}

const calculatePoints = (currentState, { difficulty } = {}) => {
  const { numberOfGuesses, cards } = currentState
  const newState = { ...currentState }

  const idealNumberOfGuesses = cards.length
  const ratio = (idealNumberOfGuesses / numberOfGuesses)
  const rationInPercentage = ratio * 100
  const pointsValue = ratio * 10

  let multiplyBy = 1

  if (rationInPercentage > 75) {
    multiplyBy = 5
  } else if (rationInPercentage > 50) {
    multiplyBy = 3
  } else {
    multiplyBy = 1
  }

  newState.points = (~~pointsValue) * POINTS_CALCULATOR_BY_DIFFICULTY[difficulty] * multiplyBy

  return newState
}

const setGameEnd = (currentState, payload) => {
  const { gameEnd } = payload

  return {
    ...currentState,
    gameEnd: `${gameEnd.hours}:${gameEnd.minutes}:${gameEnd.seconds}`
  }
}

const actionResolvers = {
  [gameSetupType]: (state, payload) => gameSetupResolver(state, payload),
  [flipCardType]: (state, payload) => flipCardResolver(state, payload),
  [compareFlippedCardType]: state => compareFlippedCardsResolver(state),
  [restartGameType]: (state, payload) => restartGameResolver(state, payload),
  [calculatePointsType]: (state, payload) => calculatePoints(state, payload),
  [setGameEndType]: (state, payload) => setGameEnd(state, payload)
}

export default actionResolvers
