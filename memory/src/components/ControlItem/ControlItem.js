import styled from 'styled-components'

const LEFT_ITEM_POSITION = {
  top: 'calc(50% - 52px)',
  left: 0
}

const RIGHT_ITEM_POSITION = {
  top: 'calc(50% - 52px)',
  right: 0
}

const ControlItemStyled = styled.img`
  height: 120px;
  position: fixed;
  top: calc(50% - 52px);
  ${({ position = 'left' }) => position === 'left' ? LEFT_ITEM_POSITION : RIGHT_ITEM_POSITION};
  z-index: 999;
`

export default ControlItemStyled
