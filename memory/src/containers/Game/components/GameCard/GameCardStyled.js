import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import CARD_BACKGROUND_IMAGE from '~images/card-background-image.jpg'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

const getBackgroundImage = url => ({ 'background-image': `url(${url})` })

const CommonProperties = `
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border: 10px solid #333333;
border-image: url(${CARD_BACKGROUND_IMAGE}) 30;
box-sizing: border-box;
background-repeat: no-repeat;
backface-visibility: hidden;
`

const GameCardStyled = styled.div`
position: relative;
height: 200px;
width: 200px;
margin: 10px;
transition: transform .4s, box-shadow .2s ease;
transform-style: preserve-3d;
transform: ${({ isActive }) => isActive && 'rotateY(180deg)'};
box-shadow: 0px 0px 20px rgba(178, 32, 40, .1);
z-index: 99999;
perspective: 1000px;
transform-style: preserve-3d;

:hover {
  box-shadow: 0px 0px 20px rgba(178, 32, 40, .8);
}

.card-inner {
  height: 100%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
}

#cover, #content {
  ${CommonProperties}
}

#cover {
  background: url(${CARD_BACKGROUND_IMAGE});
  border-image: url(${CARD_BACKGROUND_IMAGE}) 30;
  background-size: 126%;
  background-position: 53% 48%;
}

#content {
  transform: rotateY(180deg);
  ${({ backgroundImageUrl }) => getBackgroundImage(backgroundImageUrl)};
  background-size: contain;
  background-position: center;
  background-color: #232323;
}

${phoneMediaRule} {
  height: 100px;
  width: 100px;
}
`

export default GameCardStyled
