import styled from 'styled-components'
import DifficultiesMenu from '~components/DifficultiesMenu/DifficultiesMenu'
import { setCurrentlyActiveUserDifficulty } from '~store/modules/Users/actions'

const DifficultySection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoTextStyled = styled.span`
  font-size: 24px;
  color: #969696;
`

const DifficultySelection = ({ className }) => {
  return (
    <DifficultySection className={`${className}`}>
      <InfoTextStyled>CHOOSE DIFFICULTY</InfoTextStyled>
      <DifficultiesMenu action={setCurrentlyActiveUserDifficulty} />
      <span style={{ marginTop: '20px', width: '220px', textAlign: 'center' }}>
        Choose difficulty for Your gameplay experience.
      </span>
    </DifficultySection>
  )
}

export default DifficultySelection
