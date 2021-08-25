import routes from '~routes'

export const handleRedirection = (history = {}, redirectTo = '') => {
  const doesRouteExist = ~routes.findIndex(({ path }) => redirectTo === path)

  if (doesRouteExist) {
    history.push(redirectTo)
  }
}
