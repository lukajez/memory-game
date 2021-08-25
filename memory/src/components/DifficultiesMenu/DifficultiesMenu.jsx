import PREVIOUS from '~static/images/previous.svg'
import FOLLOWING from '~static/images/following.svg'
import Indicators from '../Indicators/Indicators'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  DifficultyMenuHolder,
  DifficultyTitle
} from './DifficultiesMenuStyled'

const difficultyMenu = [
  { type: 'easy' },
  { type: 'medium' },
  { type: 'hard' }
]

const DifficultiesMenu = ({ action }) => {
  const [currentFocusedDifficulty, setCurrentFocusedDifficulty] = useState({ index: 1, type: difficultyMenu[1].type })

  const dispatch = useDispatch()

  const setDifficulty = useCallback(difficulty => dispatch(action({ difficulty })), [dispatch, action])

  const changeDifficulty = event => {
    const { target: { name: direction } } = event

    const isLeftClickedAndDifficultyIsFirst = direction === 'left' && currentFocusedDifficulty.index === 0
    const isLeftClickedAndDifficultyIsLast = direction === 'right' && currentFocusedDifficulty.index === difficultyMenu.length - 1

    if (isLeftClickedAndDifficultyIsFirst || isLeftClickedAndDifficultyIsLast) {
      return
    }

    const indexOffset = direction === 'left' ? -1 : 1
    setCurrentFocusedDifficulty(({ index }) =>
      ({ index: index + indexOffset, type: difficultyMenu[index + indexOffset].type }))
  }

  useEffect(() => {
    setDifficulty(currentFocusedDifficulty.type)
  }, [setDifficulty, currentFocusedDifficulty])

  return (
    <>
      <DifficultyMenuHolder>
        <img src={PREVIOUS} alt="prev" name="left" onClick={event => changeDifficulty(event)} />
          <DifficultyTitle>
            <span>{currentFocusedDifficulty?.type?.toUpperCase()}</span>
          </DifficultyTitle>
        <img src={FOLLOWING} alt="next" name="right" onClick={event => changeDifficulty(event)} />
      </DifficultyMenuHolder>
      <Indicators number={difficultyMenu.length} currentActive={currentFocusedDifficulty.index} />
    </>
  )
}

export default DifficultiesMenu
