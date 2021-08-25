import reducers from './Memorize.reducers.store'
import { createStore, combineReducers } from 'redux'
import { getPersistedState } from '~utilities/Store.utilities'
import { PERSISTED_STATE_MOCK } from '../mock/mock'

// combine all defined reducers into one reducer
const rootReducer = combineReducers(reducers)

// get data from last time if there is any
const persistedState = getPersistedState()

if (!persistedState?.users) {
  persistedState.users = PERSISTED_STATE_MOCK
}

// put that data in store
const store = createStore(rootReducer, persistedState)

export default store
