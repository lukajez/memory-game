import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const AvatarMenuHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 460px;
  width: 100%;

  ${phoneMediaRule} {
    height: 330px;
    width: 100%;
  }
`
export const AvatarMenuStyled = styled.ul`
  display: flex;
  font-size: 48px;
  font-weight: 900;
  list-style: none;
  transform: ${({ moveOffsetX }) => moveOffsetX};
  transition: transform .2s ease;
  position: absolute;
`

export const ButtonsHolderStyled = styled.div`
  display: flex;
  height: 40px;
  width: 330px;
  color: #fff;
  background-color: rgba(24, 24, 24, 1);
  z-index: 999;
  position: absolute;
  bottom: 15px;

  button {
    margin: 0;
    height: 100%;
    width: 50%;
    z-index: 999;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: 'SulphurPoint-Regular';
  }

  ${phoneMediaRule} {
    height: 30px;
    width: 220px;
    bottom: 25px;
  }
`