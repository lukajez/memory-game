import ContainerStyled from './ContainerStyled'
import BOTTOM_LEFT from '~static/images/bottom-left.svg'
import TOP_RIGHT from '~static/images/top-right.svg'
import CornerItemStyled from '../CornerItemStyled/CornerItemStyled'

const Container = ({ children, verticalAlign, horizontalAlign, areCornerItemsVisible = true }) => (
  <ContainerStyled id="background-image" verticalAlign={verticalAlign} horizontalAlign={horizontalAlign}>
    {
      areCornerItemsVisible &&
      <>
        <CornerItemStyled itemPosition="top-right" src={TOP_RIGHT} alt="top-right" />
        <CornerItemStyled itemPosition="bottom-left" src={BOTTOM_LEFT} alt="top-right" />
      </>
    }
    { children }
  </ContainerStyled>
)

export default Container
