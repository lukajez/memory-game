import gameplayActions from './modules/Gameplay/reducer'
import usersActions from './modules/Users/reducer'

// combine actions
// into the one object
// for easier future usage

const actions = {
  gameplayActions,
  usersActions
}

export default actions
