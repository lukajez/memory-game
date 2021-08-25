export const getTimeFormat = timestamp => {
  const date = new Date(timestamp + 1000)

  const hours = `0${date.getHours() - 1}`.slice(-2)
  const minutes = `0${date.getMinutes()}`.slice(-2)
  const seconds = `0${date.getSeconds()}`.slice(-2)
  
  return {
    hours,
    minutes,
    seconds
  }
}

export const delaySetState = ({ setterMethod, newState, delay }) => {
}
