import CONTROL_LEFT from '~static/images/control-left.svg'
import CONTROL_RIGHT from '~static/images/control-right.svg'
import ControlItemStyled from '~components/ControlItem/ControlItem'
import { useHistory } from 'react-router'
import Container from '~components/Container/Container'
import PlayerChooseSection from './components/PlayerChooseSection'
import { useState } from 'react'
import DifficultySelection from '~containers/GameSetup/components/DifficultySelection'

const ROUTER_PUSH_MAP = {
  'left': 'landing',
  'right': 'game'
}

const PlayerChoose = () => {
  const [classes, setClasses] = useState(['entrance-from-right', 'entrance'])
  const [currentStep, setCurrentStep] = useState(0)
  const history = useHistory()

  // #region METHODS
  const handleControlItemClick = event => {
    const { target: { name: direction } } = event

    if (currentStep === 0 && direction === 'right') {
      timeout(setCurrentStep, 1)
      setClasses(['leave-to-left', 'entrance-from-right'])
    } else if (currentStep === 1 && direction === 'left') {
      timeout(setCurrentStep, 0)
      setClasses(['entrance-from-left', 'leave-to-right'])
    } else {
      const path = ROUTER_PUSH_MAP[direction]
      history.push(path)
    }
  }

  const timeout = (setState, newState) => {
    const changeStepTimer = setTimeout(() => {
      setState(newState)
    }, 300)

    return () => clearTimeout(changeStepTimer)
  }
  // #endregion


  return (
    <Container horizontalAlign={'center'} verticalAlign={currentStep === 1 ? 'center' : ''}>
      <ControlItemStyled
        name="left"
        src={CONTROL_LEFT}
        position={'left'}
        onClick={event => handleControlItemClick(event)}
      />
      <ControlItemStyled
        name="right"
        src={CONTROL_RIGHT}
        position={'right'}
        onClick={event => handleControlItemClick(event)}
      />
      {
        currentStep === 0 &&
        <PlayerChooseSection
          className={classes[0]}
        />
      }
      {
        currentStep === 1 &&
        <DifficultySelection
          className={classes[1]}
        />
      }
    </Container>
  )
}

export default PlayerChoose
