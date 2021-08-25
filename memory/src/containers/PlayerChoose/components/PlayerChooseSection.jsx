import { useState } from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  AvatarHolder,
  AvatarInfoHolder,
  RankingStyled
} from '~containers/Ranking/RankingStyled'
import Avatar from '~components/Avatar/Avatar'
import AvatarInfo from '~components/AvatarInfo/AvatarInfo'
import useHolderWidth from '../../../hooks/useHolderWidth'
import styled from 'styled-components'

const ChooseOtherUserHolder = styled.div`
  margin-top: 20px;
  color: #f1f1f1;
  z-index: 9999;
`

const PlayerChoosSectionStyled = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PlayerChooseSection = ({ className }) => {
  const [isFocused, setIsFocused] = useState({ index: -1, focused: false })
  const [currentStep, setCurrentStep] = useState(0)
  const [classes, setClasses] = useState('')
  
  const [dimensions] = useHolderWidth()

  const { allUsers, currentActiveUser } = useSelector(state => state.users)
  
  const dispatch = useDispatch()
  const setNewCurrentActiveUser = newCurrentActiveUser => dispatch({ type: 'SET_NEW_CURRENT_ACTIVE_USER', payload: { newCurrentActiveUser } })
 
  // #region METHODS
  const handleUserItemClick = clickedUserData => {
    clickedUserData.username !== currentActiveUser.username && switchSteps()
    setNewCurrentActiveUser(clickedUserData)
  }

  const switchSteps = () => {
    timeout(setCurrentStep, 1 - currentStep)
    if (currentStep) { 
      setClasses('leave-to-right')
    } else {
      setClasses('entrance-from-right')
    }
  }

  const timeout = (setState, newState) => {
    const changeStepTimer = setTimeout(() => {
      setState(newState)
    }, 300)

    return () => clearTimeout(changeStepTimer)
  }
  // #endregion

  // #region RENDER METHODS
  const renderSingleAvatar = ({ user, isActive, index }) => (
    <AvatarHolder
      key={user.username + index}
      onClick={() => handleUserItemClick(user)}
      onMouseEnter={() => setIsFocused({ index, focused: true })}
      onMouseLeave={() => setIsFocused({ index, focused: false })}
    >
      <Avatar
        playVideo={index === 0 ? isActive : (isFocused.index === index && isFocused.focused)}
        isActiveItem={index === 0 ? isActive : (isFocused.index === index && isFocused.focused)}
        currentActiveAvatar={user.avatar}
      />
      <AvatarInfoHolder>
        <AvatarInfo avatarInfo={[
          { info: user.username, label: 'USERNAME' },
          { info: user?.difficulty?.toUpperCase(), label: 'DIFFICULTY' }
        ]} />
      </AvatarInfoHolder>
    </AvatarHolder>
  )
  // #endregion

  return (
    <PlayerChoosSectionStyled className={className}>
      <h2>COUNTINUE AS</h2>
      { renderSingleAvatar({ user: currentActiveUser, isActive: true, index: 0 }) }
      <ChooseOtherUserHolder>
        <span onClick={() => switchSteps()}>{currentStep ? 'HIDE ALL USERS' : 'SHOW ALL USERS'}</span>
      </ChooseOtherUserHolder>
      {
        currentStep === 1 &&
        <RankingStyled className={classes} dimensions={dimensions}>
        { allUsers.map((user, index) => renderSingleAvatar({ user, isActive: true, index: index + 1 })) }
        </RankingStyled>       
      }
    </PlayerChoosSectionStyled>
  )
}

export default PlayerChooseSection
