import styled from 'styled-components'
import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'

export const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const AvatarInfoHolder = styled.div`
  display: flex;
  flex-direction: column;
`

export const SingleInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 ;
`

export const LabelStyled = styled.span`
  font-size: 18px;
  color: #A6A6A6;
  
  ${phoneMediaRule} {
    font-size: 12px;
  }
`

export const InfoStyled = styled.span`
  font-size: 24px;
  color: #FFFFFF;

  ${phoneMediaRule} {
    font-size: 16px;
  }
`
