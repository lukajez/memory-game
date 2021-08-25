import React, { useEffect, useCallback } from 'react'
import routes from '~routes'
import { Switch, Route, useHistory } from 'react-router-dom'

const DEFAULT_ROUTE_OPTIONS = { path: '', component: {} }

/**
 * RouterSwitch component contains switch and routes for the application
 * @returns {JSX}
 */
const RouterSwitch = ({ redirectTo = '/' }) => {
  const history = useHistory()

  // Defensive approach for redirection, returns if specified path exists
  const doesDestinationPathExist = useCallback(() =>
    ~routes.findIndex(route => route.path === redirectTo), [redirectTo])

  useEffect(() => {
    if (doesDestinationPathExist()) {
      history.push(redirectTo)
    }
  }, [
    redirectTo,
    history,
    doesDestinationPathExist
  ])

  return (
    <Switch>
      { routes.map(({ component, path } = DEFAULT_ROUTE_OPTIONS) => (<Route exact path={path} component={component} key={path} />)) }
    </Switch>
  );
};

export default RouterSwitch
