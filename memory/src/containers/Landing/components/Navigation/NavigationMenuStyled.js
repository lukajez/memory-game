import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities.js'
import styled from 'styled-components'

const { phone } = generatedScssMediaOnlyRules

const LandingPageNavigationMenuStyled = styled.ul`
  position: absolute;
  bottom: 80px;
  left: 100px;
  font-family: Staatliches;
  font-size: 36px;
  /* height: 400px; */
  width: 250px;
  list-style: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  li {
    display: flex;
    flex-direction: column;
    margin: 14px 0;
    transition: .2s ease;
    cursor: pointer;
  }
  
  li:hover {
    color: #B22028;
  }

  ${phone} {
    font-size: 24px;
    /* height: 300px; */
    width: 150px;
    top: calc(50% - 150px + 50px); // height of an title and logo container + 50px random choosed offset
    left: calc(50% - 75px);
    align-items: center;
  }
`

export default LandingPageNavigationMenuStyled
