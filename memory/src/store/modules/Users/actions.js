import UsersActionsTypes from './actions-types'

const {
  addUserInAllUsersType,
  setNewCurrentActiveUserType,
  updateCurrentlyActiveUserScoreType,
  setCurrentlyActiveUserAvatarType,
  setCurrentlyActiveUserUsernameType,
  setCurrentlyActiveUserDifficultyType,
  chackIfUserAlreadyExistType,
  sortUsersRankingByOrderAndDifficultyType,
  validateCurrentUsernameType
} = UsersActionsTypes

export const setCurrentlyActiveUserDifficulty = payload => ({
  type: 'SET_CURRENTLY_ACTIVE_USER_DIFFICULTY',
  payload
})

export const sortUsersByOrderAndDifficulty = payload => ({
  type: 'SORT_USERS_RANKING_BY_ORDER_AND_DIFFICULTY',
  payload: { ...payload, order: 'desc' }
})

export const addUserInAllUsersAction = payload => ({
  type: addUserInAllUsersType,
  payload
})

export const setNewCurrentActiveUserAction = payload => ({
  type: setNewCurrentActiveUserType,
  payload
})

export const updateCurrentlyActiveUserScoreAction = payload => ({
  type: updateCurrentlyActiveUserScoreType,
  payload
})

export const setCurrentlyActiveUserAvatarAction = payload => ({
  type: setCurrentlyActiveUserAvatarType,
  payload
})

export const setCurrentlyActiveUserUsernameAction = payload => ({
  type: setCurrentlyActiveUserUsernameType,
  payload
})

export const setCurrentlyActiveUserDifficultyAction = payload => ({
  type: setCurrentlyActiveUserDifficultyType,
  payload
})

export const chackIfUserAlreadyExistAction = payload => ({
  type: chackIfUserAlreadyExistType,
  payload
})

export const sortUsersRankingByOrderAndDifficultyAction = payload => ({
  type: sortUsersRankingByOrderAndDifficultyType,
  payload
})

export const validateCurrentUsernameAction = payload => ({
  type: validateCurrentUsernameType,
  payload
})
