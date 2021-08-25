import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities.js'
import styled from 'styled-components'

const {
  phone: phoneMediaRule,
  tablet: tabletMediaRule
} = generatedScssMediaOnlyRules

const TitleAndLogoContainerStyled = styled.div`
  margin: ${({ centered }) => centered ? 'auto' : '26px'} auto;

  ${phoneMediaRule} {
    margin: 26px auto;
  }

  ${tabletMediaRule} {
    margin: 50px auto;
  }
`

export default TitleAndLogoContainerStyled
