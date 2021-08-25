export const saveStateIntoLocalStorage = (state = {}) => {
  state = state || {}

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      const value = JSON.stringify(state[key])
      localStorage.setItem(key, value)
    }
  }
}

export const loadStateFromLocalStorage = (state = '') => {
  let loadedState

  try {
    const stateFromLocalStorage = localStorage.getItem(state)
    // doesn't matter if value is null, we want to use it as well
    loadedState = JSON.parse(stateFromLocalStorage)
  } catch (error) {
    loadedState = null
  }

  return loadedState
}
