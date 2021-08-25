import styled from 'styled-components'
import useTimer from '~hooks/useTimer'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGameEndAction } from '~store/modules/Gameplay/actions'

const TimePartStyled = styled.span`
  width: 30%;
  font-size: 24px;
`

const TimeHolderStyled = styled.div`
  display: flex;
  width: 100px;
  margin-top: 40px;

  span {
    font-size: 24px;
    margin: 0 2px;
  }
`

const Timer = ({ startTime, shouldStop }) => {
  const [currentTime] = useTimer({ startTime, shouldStop })

  const dispatch = useDispatch()
  const setGameEnd = useCallback(() => dispatch(setGameEndAction({ gameEnd: currentTime })), [dispatch, currentTime])

  useEffect(() => {
    if (shouldStop) {
      setGameEnd()
    }
  }, [shouldStop, setGameEnd])

  return (
    <TimeHolderStyled>
      <TimePartStyled>{currentTime.hours || '00'}</TimePartStyled>
      <span>:</span>
      <TimePartStyled>{currentTime.minutes || '00'}</TimePartStyled>
      <span>:</span>
      <TimePartStyled>{currentTime.seconds || '00'}</TimePartStyled>
    </TimeHolderStyled>
  )
}

export default Timer
