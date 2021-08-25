import actionResolvers from './action-resolvers'

const initialState = {
  allUsers: [],
  currentActiveUser: null,
  validationErrorMessage: null,
  ranking: []
}

const usersReducer = (currentState = initialState, { type, payload } = {}) => {
  currentState = { ...initialState, ...currentState }

  const actionResolver = type ? actionResolvers[type] : null

  return actionResolver ? actionResolver(currentState, payload) : currentState
}

export default usersReducer
