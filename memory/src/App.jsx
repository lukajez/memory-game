import RouterSwitch from '~router/RouterSwitch'
import { BrowserRouter as Router } from 'react-router-dom'
import './main-style.scss'

// first page to be open, as App.jsx is used only for
// entrance in project, redirection and to apply base styles
const REDIRECT_TO = '/landing'

/**
 * App component is an entry point for the application
 * and redirects user to Landing page
 *
 * @returns {JSX}
 */
const App = () => (
  <Router>
    <div className="app">
      <RouterSwitch redirectTo={REDIRECT_TO} />
    </div>
  </Router>
)

export default App
