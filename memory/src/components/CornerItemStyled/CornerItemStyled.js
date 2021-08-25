import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities.js'
import styled from 'styled-components'

const CORNER_ITEM_OFFSET = '20px'
const CORNER_ITEM_OFFSET_PHONE = '5px'

const TOP_RIGHT_CORNER_ITEM_POSITION = {
  right: CORNER_ITEM_OFFSET,
  top: CORNER_ITEM_OFFSET
}

const BOTTOM_LEFT_CORNER_ITEM_POSITION = {
  left: CORNER_ITEM_OFFSET,
  bottom: CORNER_ITEM_OFFSET
}

const TOP_RIGHT_CORNER_ITEM_POSITION_PHONE = {
  right: CORNER_ITEM_OFFSET_PHONE,
  top: CORNER_ITEM_OFFSET_PHONE
}

const BOTTOM_LEFT_CORNER_ITEM_POSITION_PHONE = {
  left: CORNER_ITEM_OFFSET_PHONE
  // top: '100%'
}

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

const CornerItemStyled = styled.img`
  position: absolute;
  ${({ itemPosition = 'bottom-left' }) => itemPosition === 'top-right' ? TOP_RIGHT_CORNER_ITEM_POSITION : BOTTOM_LEFT_CORNER_ITEM_POSITION};

  
  ${phoneMediaRule} {
    ${({ itemPosition = 'bottom-left' }) => itemPosition === 'top-right' ? TOP_RIGHT_CORNER_ITEM_POSITION_PHONE : BOTTOM_LEFT_CORNER_ITEM_POSITION_PHONE};
  }
`

export default CornerItemStyled
