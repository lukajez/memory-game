import { getTimeFormat } from '~utilities/Time.utilities'
import { useState, useEffect } from 'react'

const useTimer = ({ startTime, shouldStop }) => {
  const [currentTime, setCurrentTime] = useState({})
  useEffect(() => {
    let timeout

    if (!shouldStop) {
      timeout = setTimeout(() => {
        const moment = new Date()
        setCurrentTime(getTimeFormat(moment.getTime() - startTime.getTime()))
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [
    startTime,
    shouldStop,
    currentTime
  ])

  return [currentTime]
}

export default useTimer
