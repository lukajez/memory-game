import { saveStateIntoLocalStorage } from '~utilities/LocalStorage.utilities'
import { validateUsername, checkIfUserAlreadyExist } from '~helpers/Store.helpers'

const clearCurrentActiveUser = currentState => ({
  ...currentState,
  currentActiveUser: null
})

const addUserInAllUsers = currentState => {
  const { allUsers, ranking, currentActiveUser } = currentState
  const user = { ...currentActiveUser, score: { [currentActiveUser.difficulty]: 0 } }
  const newUsers = [...allUsers, user]

  const newState = {
    ...currentState,
    allUsers: newUsers,
    currentActiveUser: user,
    validationErrorMessage: null // reset validationErrorMessage for new user validation
  }

  saveStateIntoLocalStorage({ users: {
    allUsers: newUsers,
    currentActiveUser: user,
    ranking
  }})

  return newState
}

const setDifficultyForCurrentlyActiveUser = (currentState, payload) => {
  const { difficulty } = payload
  const currentActiveUser = { ...currentState.currentActiveUser, difficulty }

  return {
    ...currentState,
    currentActiveUser
  }
}

const setAvatarForCurrentlyActiveUser = (currentState, payload) => {
  const { currentActiveUser } = currentState
  const { avatar } = payload

  const updatedCurrentActiveUser = { ...currentActiveUser, avatar }

  return {
    ...currentState,
    currentActiveUser: updatedCurrentActiveUser
  }
}

const setUsernameForCurrentlyActiveUser = (currentState, payload) => {
  const { allUsers, currentActiveUser } = currentState
  const { username } = payload

  const updatedCurrentActiveUser = { ...currentActiveUser, username }
  const validationErrorMessage = validateUsername(allUsers, username)

  return {
    ...currentState,
    validationErrorMessage,
    currentActiveUser: updatedCurrentActiveUser
  }
}

const validateCurrentUsername = currentState => {
  const { allUsers, currentActiveUser } = currentState
  const { username } = currentActiveUser || {}

  const validationErrorMessage = validateUsername(allUsers, username)

  return {
    ...currentState,
    validationErrorMessage
  }
}

const updateScoreForCurrentlyActiveUser = (currentState, payload) => {
  const {
    currentActiveUser: {
      score: currentScore = {},
      difficulty = '',
      username,
      ...restUserData
    },
    allUsers
  } = currentState
  const { score: earnedCurrentGamePoints } = payload

  // add new score to existing user's score
  const newScore = difficulty ? { ...currentScore, [difficulty]: (currentScore[difficulty] || 0) + earnedCurrentGamePoints } : {}

  const newUser = { ...restUserData, difficulty, username, score: newScore }
  const userIndex = allUsers.findIndex(user => user.username === username)

  const newAllUsers = [...allUsers]

  if (~userIndex) {
    newAllUsers[userIndex] = newUser
  } else {
    newAllUsers.push(newUser)
  }

  const newRanking =
    [...newAllUsers]
    .map((user = {}) => ({ ...user, score: (user.score && user.score[difficulty]) || 0 })) // get rid of nested score, return just value
    .filter(user => !!user.score) // show only players with above zero
    .sort((userOne = {}, userTwo = {}) => userTwo.score - userOne.score) // sort previously get value

  const newState = {
    ...currentState,
    currentActiveUser: newUser,
    allUsers: newAllUsers,
    ranking: newRanking
  }

  saveStateIntoLocalStorage({ users: {
    currentActiveUser: newUser,
    allUsers: newAllUsers,
    ranking: newRanking
  } })

  return newState
}

const setTotalGamesPlayedForCurrentlyActiveUser = (currentState, payload) => ({currentState, payload})

const setTotalGamesFinishedForCurrentlyActiveUser = (currentState, payload) => ({currentState, payload})

const sortUsersByOrderAndDifficultyResolver = (currentState, payload) => {
  const { allUsers } = currentState
  const { difficulty } = payload

  const newRanking =
    [...allUsers]
    .map((user = {}) => ({ ...user, score: user.score[difficulty] || 0 }))
    .filter(user => !!user.score)
    .sort((userOne = {}, userTwo = {}) => getSortByOrder(userOne.score, userTwo.score))

  return {
    ...currentState,
    ranking: newRanking
  }
}

// helper funtion
const getSortByOrder = (itemOne, itemTwo, order = 'desc') => order === 'asc' ? itemOne - itemTwo : itemTwo - itemOne

const setNewCurrentActiveUser = (currentState, payload) => {
  const { newCurrentActiveUser } = payload

  saveStateIntoLocalStorage({ users: {
    allUsers: currentState.allUsers,
    currentActiveUser: newCurrentActiveUser,
    ranking: currentState.ranking
  }})

  return {
    ...currentState,
    currentActiveUser: newCurrentActiveUser
  }
}

const actionResolvers = {
  'CLEAR': currentState => clearCurrentActiveUser(currentState),
  'ADD_USER_IN_ALL_USERS': state => addUserInAllUsers(state),
  'SET_NEW_CURRENT_ACTIVE_USER': (state, payload) => setNewCurrentActiveUser(state, payload),
  'UPADTE_CURRENTLY_ACTIVE_USER_SCORE': (state, payload) => updateScoreForCurrentlyActiveUser(state, payload),
  'SET_CURRENTLY_ACTIVE_USER_AVATAR': (state, payload) => setAvatarForCurrentlyActiveUser(state, payload),
  'SET_CURRENTLY_ACTIVE_USER_USERNAME': (state, payload) => setUsernameForCurrentlyActiveUser(state, payload),
  'SET_CURRENTLY_ACTIVE_USER_DIFFICULTY': (state, payload) => setDifficultyForCurrentlyActiveUser(state, payload),
  'SET_CURRENTLY_ACTIVE_USER_TOTAL_GAMES_PLAYED': (state, payload) => setTotalGamesPlayedForCurrentlyActiveUser(state, payload),
  'SET_CURRENTLY_ACTIVE_USER_TOTAL_GAMES_FINISHED': (state, payload) => setTotalGamesFinishedForCurrentlyActiveUser(state, payload),
  'CHECK_IF_USER_ALREADY_EXIST': (state, payload) => checkIfUserAlreadyExist(state, payload),
  'SORT_USERS_RANKING_BY_ORDER_AND_DIFFICULTY': (state, payload) => sortUsersByOrderAndDifficultyResolver(state, payload),
  'VALIDATE_CURRENT_USERNAME': state => validateCurrentUsername(state)
}

export default actionResolvers
