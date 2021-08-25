import styled from 'styled-components'
import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const GameOverStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 600px;
  position: absolute;
  left: calc(50% - 300px);
  top: calc(50% - 200px);
  background: linear-gradient(180deg, #121212 0%, rgba(10, 10, 10, 0) 100%);
  backdrop-filter: blur(20px);
  border-radius: 10px 10px 0px 0px;

  ${phoneMediaRule} {
    width: 100%;
    height: 100vh;
    left: 0%;
    top: 0%;
    top: 0;
    position: fixed;
  }
`

export const TitleStyled = styled.span`
  font-family: 'Staatliches';
  font-size: 24px;
  color: #B22028;
  margin: 20px 0;
`

export const GameInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`

export const SingleInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`

export const GameInfoLabelStyled = styled.span`
  font-family: 'SulphurPoint-Regular';
  font-size: 18px;
  color: #757575;
`

export const GameInfoStyled = styled.span`
  font-family: 'Staatliches';
  font-size: 24px;
  color: #FFFFFF;
`

export const CotnrolItemInfo = styled.span`
  font-family: 'SulphurPoint-Regular';
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  ${({ position }) => position === 'left' ? { transform: 'rotate(90deg)', left: '6px' } : { transform: 'rotate(270deg)', right: '6px' }}
`
