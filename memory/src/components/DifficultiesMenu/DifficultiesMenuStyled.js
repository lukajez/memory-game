import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities.js'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const DifficultyMenuHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
z-index: 9999;

button {
  width: 60px;
}
`

export const DifficultyTitle = styled.div`
display: flex;
min-width: 280px;
font-size: 48px;
font-weight: 900;

${phoneMediaRule} {
  min-width: 150px;
  font-size: 30px;
}

span {
  margin: 0 auto;
}
`
