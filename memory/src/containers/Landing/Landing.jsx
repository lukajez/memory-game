import ApplicationTitleAndLogo from './components/ApplicationTitleAndLogo/ApplicationTitleAndLogo'
import Navigation from './components/Navigation/Navigation'
import Container from '~components/Container/Container'

const Landing = () => {
  return (
    <Container>
      <Navigation />
      <ApplicationTitleAndLogo centered={true} />
    </Container>
  )
}

export default Landing
