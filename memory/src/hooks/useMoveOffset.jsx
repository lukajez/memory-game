import { useCallback, useEffect, useState } from 'react'

const useMoveOffset = ({ moveOffsetMap }) => {
  const [moveOffset, setMoveOffset] = useState(0)

  const handleWindowSize = useCallback(() => {
    let moveOffsetDevice = ''
    if (window.innerWidth > 0 && window.innerWidth < 768) {
      moveOffsetDevice = 'phone'
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      moveOffsetDevice = 'tablet'
    } else {
      moveOffsetDevice = 'desktop'
    }

    setMoveOffset(moveOffsetMap[moveOffsetDevice])
  }, [setMoveOffset, moveOffsetMap])

  useEffect(() => {
    handleWindowSize()
  }, [handleWindowSize])

  return [moveOffset]
}

export default useMoveOffset
