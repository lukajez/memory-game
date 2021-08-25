import styled from 'styled-components'
import DEFAULT_BACKGROUND_IMAGE from '~images/default-background-image.png'
import { TEXT_DEFAULT_COLOR, TEXT_DEFAULT_SIZE } from '~static/style-config'

const ContainerStyled = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: ${({ horizontalAlign = 'flex-start' }) => horizontalAlign};
  justify-content: ${({ verticalAlign = 'flex-start' }) => verticalAlign};
  font-size: ${TEXT_DEFAULT_SIZE};
  /* background-image: url(${DEFAULT_BACKGROUND_IMAGE}); */
  background-size: 100vw;
  background-repeat: repeat;
  background-position: top;
  color: ${TEXT_DEFAULT_COLOR};
  overflow-x: hidden;
  overflow-y: auto;
  /* transform: translate3d(0,0,0); */
  backface-visibility: hidden;
  transform-style: preserve-3d;
  background-color: #1a1a1a;
`

export default ContainerStyled
