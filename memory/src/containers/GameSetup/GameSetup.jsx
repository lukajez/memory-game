import { useState, useEffect, useCallback } from 'react'
import DifficultySelection from './components/DifficultySelection'
import AvatartSelection from './components/AvatarSelection'
import CONTROL_LEFT from '~static/images/control-left.svg'
import CONTROL_RIGHT from '~static/images/control-right.svg'
import ControlItemStyled from '~components/ControlItem/ControlItem'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import Container from '~components/Container/Container'

const ROUTER_PUSH_MAP = {
  'left': 'landing',
  'right': 'game'
}

const GameSetup = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [classes, setClasses] = useState(['entrance-from-right', 'entrance'])
  // leftControlVisibility will always be true
  // rightControlVisibility will depend on validationErrorMessage and current active step
  const [areControlsVisible, setAreControlsVisible] = useState([false, false])

  const history = useHistory()

  const dispatch = useDispatch()
  const addUserInAllUsers = useCallback(() => dispatch({ type: 'ADD_USER_IN_ALL_USERS' }), [dispatch])

  const { validationErrorMessage } = useSelector(state => state.users)

  const handleControlItemClick = event => {
    const { target: { name: direction } } = event

    if (currentStep === 0 && direction === 'right') {
      timeout(setCurrentStep, 1)
      setClasses(['leave-to-left', 'entrance-from-right'])
    } else if (currentStep === 1 && direction === 'left') {
      timeout(setCurrentStep, 0)
      setClasses(['entrance-from-left', 'leave-to-right'])
    } else {
      direction === 'right' && addUserInAllUsers()

      const path = ROUTER_PUSH_MAP[direction]
      history.push(path)
    }
  }

  const checkIfControlsShouldBeVisible = useCallback(() => {
    const isUserOnAvatarSelection = currentStep === 1
    const isUserOnDifficultySelection = currentStep === 0

    const isRightControlVisible = isUserOnDifficultySelection || (validationErrorMessage === '' && isUserOnAvatarSelection)
    setAreControlsVisible(() => [true, isRightControlVisible])
  }, [currentStep, validationErrorMessage])

  const timeout = (setState, newState) => {
    const changeStepTimer = setTimeout(() => {
      setState(newState)
    }, 300)

    return () => clearTimeout(changeStepTimer)
  }

  useEffect(() => {
    checkIfControlsShouldBeVisible()
  }, [checkIfControlsShouldBeVisible])

  return (
    <Container
      horizontalAlign={'center'}
      verticalAlign={'center'}
    >
      {
        areControlsVisible[0] &&
        <ControlItemStyled
          name="left"
          src={CONTROL_LEFT}
          position={'left'}
          onClick={event => handleControlItemClick(event)}
        />
      }
      {
        areControlsVisible[1] &&
        <ControlItemStyled
          name="right"
          src={CONTROL_RIGHT}
          position={'right'}
          onClick={event => handleControlItemClick(event)}
        />
      }
      {
        currentStep === 0 &&
        <DifficultySelection
          className={classes[0]}
        />
      }
      {
        currentStep === 1 &&
        <AvatartSelection
          className={classes[1]}
        />
      }
    </Container>
  )
}

export default GameSetup
