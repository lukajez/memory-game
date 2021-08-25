import { useHistory } from 'react-router'
import { handleRedirection } from '~router/Router.helpers'
import NavigationMenuStyled from './NavigationMenuStyled'

const MENU_ITEMS = [
  {
    title: 'New Game',
    path: '/game-setup'
  },
  {
    title: `Continue`,
    path: '/player-choose'
  },
  {
    title: 'Ranking',
    path: '/ranking'
  }
]

const Navigation = () => {
  const history = useHistory()

  return (
    <NavigationMenuStyled>
      {
        MENU_ITEMS.map(menuItem =>
          <li
            onClick={() => handleRedirection(history, menuItem?.path)}
            key={menuItem?.title}
          >
            { menuItem?.title }
          </li>
        )
      }
    </NavigationMenuStyled>
  )
}

export default Navigation
