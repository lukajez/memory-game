import styled from 'styled-components'

const getCustomStyle = active => ({
  'background-color': active ? '#B22028' : 'transparent',
  'border': `1px solid ${active ?'#B22028' : '#fff'}`,
  'transform': `rotate(45deg) scale(${active ? 1.6 : 1})`
})

const Indicator = styled.div`
  height: 8px;
  width: 8px;
  ${({ active }) => getCustomStyle(active)};
  margin: auto 10px;
  transition: transform .4s;
`

const IndicatorsHolder = styled.div`
  display: flex;
`

const Indicators = ({ className, number, currentActive }) => {
  const renderIndicators = () => {
    const indicators = []

    for (let index = 0; index < number; index++) {
      const indicator = <Indicator active={currentActive === index} key={index} />

      indicators.push(indicator)
    }

    return indicators
  }
  return (
    <IndicatorsHolder className={className}>
      { renderIndicators() }
    </IndicatorsHolder>
  )
}

export default Indicators
