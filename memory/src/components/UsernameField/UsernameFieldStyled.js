import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const UsernameFieldStyled = styled.input`
  height: 50px;
  width: 330px;
  border: none;
  background-color: #00000036;
  backdrop-filter: saturate(180%) blur(20px);
  color: #fff;
  font-size: 18px;
  transition: .2s ease;
  padding: 0 5px;
  box-sizing: border-box;
  text-transform: uppercase;
  outline: 1px solid rgba(107, 28, 33, 0);
  user-select: text;
  position: absolute;
  bottom: -20px;
  z-index: 9999;

  ::placeholder {
    color: #969696;
  }

  :focus {
    border: none;
    outline: 1px solid rgba(107, 28, 33, .8);
  }

  :focus-within {
    border: none;
    outline: 1px solid rgba(107, 28, 33, .8);
  }

  :focus-visible {
    border: none;
    outline: 1px solid rgba(107, 28, 33, .8);
  }

  ${phoneMediaRule} {
    height: 50px;
    width: 220px;
  }
`

export const ErrorMessageHolder = styled.div`
  color: #B22028;
  height: 30px;
  width: 330px;
  font-size: 18px;
  margin: 0 5px;
  position: absolute;
  bottom: -60px;

  ${phoneMediaRule} {
    width: 220px;
    bottom: -60px;
  }
`