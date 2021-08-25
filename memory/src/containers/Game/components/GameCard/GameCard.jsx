import { flipCardAction } from '~store/modules/Gameplay/actions'
import GameCardStyled from './GameCardStyled'
import { useDispatch } from 'react-redux'

const GameCard = ({
    card: {
      cardId = '',
      flipped = false,
      discovered = false,
      image
    }
  }) => {

  const dispatch = useDispatch()
  const flipCard = () => dispatch(flipCardAction({ cardId }))

  const handleCardClick = () => {
    if (!flipped || !discovered) {
      flipCard()
    }
  }

  return (
    <GameCardStyled
      isActive={flipped || discovered}
      backgroundImageUrl={image}
      onClick={() => handleCardClick()}
    >
      <div className="card-inner">
        <div id="cover" />
        <div id="content" />
      </div>
    </GameCardStyled>
  )
}

export default GameCard
