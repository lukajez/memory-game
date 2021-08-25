import GameCard from './components/GameCard/GameCard'
import Container from '~components/Container/Container'
import Timer from '~components/Timer/Timer'
import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
  gameSetupAction,
  compareFlippedCardsAction,
  calculatePointsAction
} from '~store/modules/Gameplay/actions'
import styled from 'styled-components'
import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import GameOver from './components/GameOver/GameOver'
import useHolderWidth from '~hooks/useHolderWidth'
import { getHolderWidth } from '~utilities/UI.utilities'
import CONTROL_LEFT from '~static/images/control-left.svg'
import ControlItemStyled from '~components/ControlItem/ControlItem'
import GameAvatar from '~components/GameAvatar/GameAvatar'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

// #region STYLED COMPONENTS
const CardsHolder = styled.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 40px 0 80px 0;
  perspective: 1000px;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  ${({ dimensions: { width } }) => getHolderWidth(.9, width, 220)}

  ${phoneMediaRule} {
    ${({ dimensions: { width } }) => getHolderWidth(.9, width, 120)}
  }
`
// #endregion

const Game = () => {
  const history = useHistory()
  const [dimensions] = useHolderWidth()
  const dispatch = useDispatch()

  // state map
  const {
    cards,
    isGameEnd,
    flippedCards,
    points,
    numberOfGuesses,
    gameStart
  } = useSelector(({ gameplay } = {}) => gameplay) || {}
  const { currentActiveUser } = useSelector(({ users } = {}) => users) || {}
  const { difficulty } = currentActiveUser || {}

  // actions map
  const gameSetup = useCallback(() => dispatch(gameSetupAction({ difficulty })), [dispatch, difficulty])

  const compareFlippedCards = useCallback(() => dispatch(compareFlippedCardsAction()), [dispatch])

  const calculatePoints = useCallback(() => dispatch(calculatePointsAction({ difficulty })), [dispatch, difficulty])

  const updateScoreForCurrentlyActiveUser = useCallback(score => dispatch({ type: 'UPADTE_CURRENTLY_ACTIVE_USER_SCORE', payload: { score } }), [dispatch])

  const calculatePointsAndUpdateUserScore = useCallback(() => {
    calculatePoints()
    updateScoreForCurrentlyActiveUser(points)
  }, [
    calculatePoints,
    updateScoreForCurrentlyActiveUser,
    points
  ])

  useEffect(() => {
    gameSetup()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let compareTimer

    if (flippedCards.length === 2) {
      compareTimer = setTimeout(() => {
        compareFlippedCards()
      }, 700)
    }

    return () => clearTimeout(compareTimer)
  }, [flippedCards, compareFlippedCards])

  useEffect(() => {
    if (isGameEnd) {
      calculatePointsAndUpdateUserScore()
    }
  }, [calculatePointsAndUpdateUserScore, isGameEnd])

  const handleControlItemClick = event => {
    const { target: { name: path } } = event
    history.push(path)
  }

  return (
    <Container
      horizontalAlign='center'
      areCornerItemsVisible={true}
      verticalAlign={'center'}
    >
      {
        !isGameEnd &&
        <ControlItemStyled
          name="landing"
          src={CONTROL_LEFT}
          position={'left'}
          onClick={event => handleControlItemClick(event)}
        />
      }
      <Timer startTime={gameStart} shouldStop={isGameEnd} />
      <CardsHolder cardNumber={cards.length} dimensions={dimensions}>
        { cards.map((card = {}) => <GameCard card={card} key={card.cardId} />) }
      </CardsHolder>
      { isGameEnd && <GameOver difficulty={difficulty} points={points} gueses={numberOfGuesses} /> }
      <GameAvatar
        currentActiveUser={currentActiveUser}
        difficulty={difficulty}
        points={points}
        gueses={numberOfGuesses}
      />
    </Container>
  )
}

export default Game
