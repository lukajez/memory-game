import { useState } from 'react'
import Avatar from '~components/Avatar/Avatar'
import AvatarInfo from '~components/AvatarInfo/AvatarInfo'
import GameAvatarButton from './components/GameAvatarButton'
import {
  GameAvatarStyled,
  AvatarDetails,
  Divider
} from './GameAvatarStyled'

const GameAvatar = ({
  currentActiveUser,
  difficulty,
  points,
  gueses
}) => {
  const [isAvatarActive, setIsAvatarActive] = useState(false)

  const handleClickGameAvatarButton = () => {
    setIsAvatarActive(!isAvatarActive)
  }

  return (
    <GameAvatarStyled isActive={isAvatarActive}>
      <GameAvatarButton handleClickGameAvatarButton={handleClickGameAvatarButton} />
      <AvatarDetails>
        <Avatar
          isActiveItem={true}
          className="avatar"
          currentActiveAvatar={currentActiveUser?.avatar}
        />
        <Divider />
        <AvatarInfo
          avatarInfo={[
            { info: currentActiveUser?.username || '', label: 'USERNAME' },
            { info: difficulty?.toUpperCase() || '', label: 'DIFFICULTY' },
            { info: currentActiveUser?.score ? currentActiveUser?.score[difficulty] : 0, label: 'TOTAL SCORE' },
            { info: points || 0, label: 'GAME POINTS' },
            { info: gueses ? gueses / 2 : 0, label: 'GUESSES' }
          ]}
        />
      </AvatarDetails>
    </GameAvatarStyled>
  )
}

export default GameAvatar
