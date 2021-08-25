import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import styled from 'styled-components'
import { getHolderWidth } from '~utilities/UI.utilities'
const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const AvatarHolder = styled.div`
display: flex;
position: relative;
margin: 20px;

${phoneMediaRule} {
  margin: 20px 0;
}
`

export const AvatarInfoHolder = styled.div`
position: absolute;
height: 100%;
width: 100%;
background: linear-gradient(180deg, #12121250, #121212);
box-sizing: border-box;
padding: 30px;
`

export const RankingStyled = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 70px 0;

${({ dimensions: { width } }) => getHolderWidth(.9, width, 380)}

${phoneMediaRule} {
  ${({ dimensions: { width } }) => getHolderWidth(.9, width, 230)}
}
`

export const FilterSectionStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`