import { loadStateFromLocalStorage } from './LocalStorage.utilities'

// key for accessing local storage data which are saved
// for cases when user closes/refreshes app and return again
// currently it is users beacause module users is only one needed
const PERSISTED_MODULE_KEYS = ['users']

export const getPersistedState = () => {
  const persistedState = {}

  for (const moduleKey of PERSISTED_MODULE_KEYS) {
    const loadedState = loadStateFromLocalStorage(moduleKey)
    persistedState[moduleKey] = loadedState
  }

  return persistedState
}
