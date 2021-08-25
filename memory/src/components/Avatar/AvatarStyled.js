import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import CARD_BACKGROUND_IMAGE from '~images/card-background-image.jpg'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const AvatarHolder = styled.div`
  position: fixed;
  left: calc(50% - 200px);

  ${({ isActive = true }) =>
    isActive ?
      { bottom: '0px', height: '250px' }
      : { bottom: '0px', height: '30px' }
  };

  width: 400px;
  transition: .3s ease;

  .avatar {
    transition: .1s ease;
    ${({ isActive = true }) => isActive ? { 'opacity': '1' } : { 'opacity': '0' }};
  }

  #button-background {
    transition: .3s ease;
    ${({ isActive = true }) => isActive ? { 'fill': '#121212 !important' } : { 'fill': '#6B1C21 !important' }};
  }

  #button-icon {
    transition: .3s ease;
    ${({ isActive = true }) => isActive ? { 'transform': 'rotate(180deg)' } : { 'transform': 'rotate(0deg)' }};
  }

  z-index: 99999;
`

const getStyle = isActiveItem => ({
  opacity: isActiveItem ? 1 : .6,
  filter: `blur(${isActiveItem ? '0px' : '6px'})`,
  transform: isActiveItem ? 'scale(1)' : 'scale(.9)',
  'box-shadow': `0px 0px 20px ${
    isActiveItem ?
      'rgba(178, 32, 40, .8)'
      : 'rgba(178, 32, 40, 0)'
    }`
})

const generateBackgroundImage = url => ({ 'background-image': `url(${url})` })

export const AvatarStyled = styled.li`
  height: 400px;
  width: 330px;
  margin: 5px;
  ${({ backgroundImageUrl }) => generateBackgroundImage(backgroundImageUrl)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  transition: transform .2s, opacity .2s ease;
  ${({ isActiveItem }) => getStyle(isActiveItem)};
  border: 10px solid #333333;
  border-image: url(${CARD_BACKGROUND_IMAGE}) 30;
  box-sizing: border-box;
  list-style: none;

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: top;
    opacity: ${({ isActiveItem }) => isActiveItem ? '1' : '.6'};
  }

  ${phoneMediaRule} {
    height: 270px;
    width: 220px;
  }
`
