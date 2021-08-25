import ApplicationTitleAndLogoStyled from './ApplicationTitleAndLogoStyled'
import LOGO from '~static/icons/logo.svg'

const ApplicationTitleAndLogo = ({ centered }) => {
  return (
    <ApplicationTitleAndLogoStyled centered={centered} className="flex-column">
      <img src={LOGO} className="app-logo" alt="logo" />
      <span className="title title-size-140">MEMORIZE</span>
      <span className="info-text info-text-size-42">MEMORY GAME FOR REAL PLAYERS</span>
    </ApplicationTitleAndLogoStyled>
  )
}

export default ApplicationTitleAndLogo
