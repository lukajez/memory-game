import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  UsernameFieldStyled,
  ErrorMessageHolder
} from './UsernameFieldStyled'

const UsernameField = ({ classes }) => {

    // #region USE SELECTOR
    const { validationErrorMessage, currentActiveUser } = useSelector(state => state.users)
    const { username } = currentActiveUser || {}
    // #endergion

    // #region DISPATCH
    const dispatch = useDispatch()
    const setUsernameForCurrentlyActiveUser = useCallback(username => dispatch({ type: 'SET_CURRENTLY_ACTIVE_USER_USERNAME', payload: { username } }), [dispatch])
    // #endregion

    // #region METHODS
    const handleOnInputChange = event => {
      const { target: { value: newUsername } = {} } = event || {}

      setUsernameForCurrentlyActiveUser(newUsername?.toUpperCase())
    }
    // #endregion
  return (
    <>
      <UsernameFieldStyled
        className={`${classes.usernameClass} ${classes.activeAvatarClass}`}
        type="username"
        name="username"
        placeholder="Your username"
        defaultValue={username || ''}
        onChange={event => handleOnInputChange(event)}
      />
      <ErrorMessageHolder className={`${classes.usernameClass} ${classes.activeAvatarClass}`}>
        <span>{validationErrorMessage}</span>
      </ErrorMessageHolder>
    </>
  )
}

export default UsernameField
