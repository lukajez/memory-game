import styled from 'styled-components'

const ButtonStyled = styled.div`
  margin: 0 auto;
  position: relative;
  height: 30px;
  width: 136px;

  #button-background {
    position: absolute;
    left: calc(50% - 68px);
    top: calc(50% - 13px);
  }

  #button-icon {
    position: absolute;
    bottom: 6px;
    left: calc(50% - 16px);
  }
`

const GameAvatarButton = ({ handleClickGameAvatarButton }) => (
  <ButtonStyled onClick={() => handleClickGameAvatarButton()}>
    <svg id="button-background" width="136" height="29" viewBox="0 0 136 29">
      <path d="M103.05 2.93316e-05L135.1 28.8751L-1.6065e-06 28.8751L32.025 7.8357e-05L103.05 2.93316e-05Z" />
    </svg>
    <svg id="button-icon" width="33" height="19" viewBox="0 0 33 19" fill="none">
      <path d="M11.0498 13.6251L8.5498 17.1251L2.5498 17.1251L9.5498 9.62512L16.5498 16.1251L18.5498 13.6251" stroke="white" strokeWidth="2" />
      <path d="M12.5498 6.62512L16.5498 2.12512L21.5498 6.62512L16.5498 12.1251" stroke="white" strokeWidth="2" />
      <path d="M14.5498 9.12512L16.5498 6.62512" stroke="white" strokeWidth="2" />
      <path d="M20.0498 12.6251L24.5498 17.1251L30.5498 17.1251L23.5498 9.12512L20.0498 12.6251Z" stroke="white" strokeWidth="2" />
    </svg>
  </ButtonStyled>
)


export default GameAvatarButton
