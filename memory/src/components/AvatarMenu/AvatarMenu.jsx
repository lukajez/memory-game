import {
  AvatarMenuHolder,
  AvatarMenuStyled,
  ButtonsHolderStyled
} from './AvatarMenuStyled'
import Avatar from '~components/Avatar/Avatar'
import Indicators from '~components/Indicators/Indicators'
import {
  AVATARS,
  DEFAULT_ANIMATIONS,
  NO_ANIMATIONS,
  ANIMATION_PAIRS
} from '~constants'
import {
  useEffect,
  useState,
  useCallback
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'

const AvatarMenu = ({
  setShowUsernameField,
  showUsernameField,
  setClasses,
  classes,
  moveOffset,
  children
}) => {

  // #region USE STATE
  const [currentActiveAvatar, setCurrentActiveAvatar] = useState({ index: 1, avatar: AVATARS[1] })
  // #endregion

  // #region USE SELECTOR
  const { validationErrorMessage } = useSelector(state => state.users)
  // #endregion

  // #region DISPATCH
  const dispatch = useDispatch()

  const setAvatarForCurrentlyActiveUser = useCallback(avatar => dispatch({ type: 'SET_CURRENTLY_ACTIVE_USER_AVATAR', payload: { avatar } }), [dispatch])
  const validateCurrentUsername = useCallback(() => dispatch({ type: 'VALIDATE_CURRENT_USERNAME' }), [dispatch])
  // #endregion

  // #region METHODS
  const changeAvatar = event => {
    const { target: { name: direction } } = event

    const isLeftClickedAndAvatarIsFirst = direction === 'left' && currentActiveAvatar.index === 0
    const isLeftClickedAndAvatarIsLast = direction === 'right' && currentActiveAvatar.index === AVATARS.length - 1

    if (isLeftClickedAndAvatarIsFirst || isLeftClickedAndAvatarIsLast) {
      return
    }

    const indexOffset = direction === 'left' ? -1 : 1

    setClasses({ ...NO_ANIMATIONS })
    setCurrentActiveAvatar(({ index }) =>
      ({ index: index + indexOffset, avatar: AVATARS[index + indexOffset] }))
  }

  const handleAvatarClick = () => {
    setShowUsernameField(!showUsernameField)

    let animationClasses = classes
    if (
      classes.activeAvatarClass === '' &&
      classes.currentElementClass === '' &&
      classes.activeAvatarClass === ''
      ) {
        animationClasses = DEFAULT_ANIMATIONS
    }

    const newState = {
      currentElementClass: ANIMATION_PAIRS[animationClasses.currentElementClass],
      usernameClass: ANIMATION_PAIRS[animationClasses.usernameClass],
      activeAvatarClass: ANIMATION_PAIRS[animationClasses.activeAvatarClass]
    }

    setClasses({...newState})
    setAvatarForCurrentlyActiveUser(currentActiveAvatar.avatar)
    !validationErrorMessage && validateCurrentUsername()
  }
  // #endregion

  // #region RENDER FUNCTIONS
  const renderAvatars = () =>
    AVATARS.reduce((renderingAvatars, currentAvatar) => {
      const isActiveItem = currentAvatar.name === currentActiveAvatar.avatar.name

      const avatarHTMLElement = (
        <Avatar
          key={currentAvatar.name}
          playVideo={true}
          className={!isActiveItem ? classes.currentElementClass : classes.activeAvatarClass}
          currentActiveAvatar={currentAvatar}
          isActiveItem={isActiveItem}
          handleAvatarClick={handleAvatarClick}
        />
      )

      renderingAvatars.push(avatarHTMLElement)

      return renderingAvatars
    }, [])
  // #endregion

  // #region USE EFFECT
  useEffect(() => {
    setAvatarForCurrentlyActiveUser(currentActiveAvatar.avatar)
  }, [setAvatarForCurrentlyActiveUser, currentActiveAvatar])
  // #endregion

  return (
    <>
      <AvatarMenuHolder>
        <AvatarMenuStyled
          moveOffsetX={`translateX(${(~~(AVATARS.length / 2) - currentActiveAvatar.index) * moveOffset}px)`}>
          { renderAvatars() }
        </AvatarMenuStyled>
        <ButtonsHolderStyled className={classes.currentElementClass}>
          <button name="left" onClick={event => changeAvatar(event)}>LEFT</button>
          <button name="right" onClick={event => changeAvatar(event)}>RIGHT</button>
        </ButtonsHolderStyled>
        {
          children
        }
      </AvatarMenuHolder>
      <Indicators className={classes.currentElementClass} number={AVATARS.length} currentActive={currentActiveAvatar.index} />
    </>
  )
}

export default AvatarMenu
