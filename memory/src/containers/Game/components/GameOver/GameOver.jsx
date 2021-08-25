import {
  GameInfoHolder,
  GameInfoLabelStyled,
  GameInfoStyled,
  GameOverStyled,
  SingleInfoHolder,
  TitleStyled,
  CotnrolItemInfo
} from './GameOverStyled'
import ControlItemStyled from '~components/ControlItem/ControlItem'
import CONTROL_LEFT from '~static/images/control-left.svg'
import CONTROL_RIGHT from '~static/images/control-right.svg'
import { useHistory } from 'react-router'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartGameAction } from '~store/modules/Gameplay/actions'

const GameOver = ({ difficulty = '', points = 0, gueses = 0 }) => {
  const dispatch = useDispatch()
  const restartGame = useCallback(() => dispatch(restartGameAction({ difficulty })), [dispatch, difficulty])

  const { gameEnd } = useSelector(state => state.gameplay)

  const gameInfo = [
    { info: difficulty, label: 'DIFFICULTY' },
    { info: points, label: 'POINTS EARNED' },
    { info: gueses, label: 'NUMBER OF GUESSES' },
    { info: gameEnd, label: 'GAME DURATION' },
  ]

  const history = useHistory()

  const handleControlItemClick = event => {
    const { target: { name: action } } = event

    if (action === 'play-again') {
      restartGame()
    } else {
      restartGame()
      history.push('landing')
    }
  }

  return (
    <GameOverStyled>
      <TitleStyled>
        YOU’VE SUCCSESSFULLY FINISHED GAME
      </TitleStyled>
      <GameInfoHolder>
        {
          gameInfo.map(({ label, info }) =>
            <SingleInfoHolder key={label}>
              <GameInfoLabelStyled>{label}</GameInfoLabelStyled>
              <GameInfoStyled>{info}</GameInfoStyled>
            </SingleInfoHolder>
          )
        }
      </GameInfoHolder>
      <div style={{ background: `url('/static/media/card-background-image.1da978a5.jpg')`}} />
      <CotnrolItemInfo position={'left'}>Main Menu</CotnrolItemInfo>
      <ControlItemStyled
        name="main-menu"
        src={CONTROL_LEFT}
        position={'left'}
        onClick={event => handleControlItemClick(event)}
      />
      <CotnrolItemInfo
        position={'right'}
      >
        Play Again
      </CotnrolItemInfo>
      <ControlItemStyled
        name="play-again"
        src={CONTROL_RIGHT}
        position={'right'}
        onClick={event => handleControlItemClick(event)}
      />
    </GameOverStyled>
  )
}

export default GameOver
