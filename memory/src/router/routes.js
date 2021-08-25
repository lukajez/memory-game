import Landing from '../containers/Landing/Landing'
import Game from '../containers/Game/Game'
import GameSetup from '../containers/GameSetup/GameSetup'
import PlayerChoose from '../containers/PlayerChoose/PlayerChoose'
import Ranking from '../containers/Ranking/Ranking'

/**
 * @public
 * @readonly
 *
 * @description
 * Array of routes which will be used for creating Route components
 *
 */
const routes = Object.freeze([
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/game',
    component: Game
  },
  {
    path: '/game-setup',
    component: GameSetup
  },
  {
    path: '/player-choose',
    component: PlayerChoose
  },
  {
    path: '/ranking',
    component: Ranking
  }
])

export default routes
