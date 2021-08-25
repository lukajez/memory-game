import { useState, useEffect } from 'react'

const windowResize = () => ({
  height: window.innerHeight,
  width: window.innerWidth
})

const useHolderWidth = () => {
  const [dimensions, setDimensions] = useState(windowResize())

  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowResize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [dimensions]
}

export default useHolderWidth
