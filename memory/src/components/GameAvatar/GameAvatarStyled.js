import generatedScssMediaOnlyRules from '~utilities/Responsivness.utilities'
import styled from 'styled-components'

const { phone: phoneMediaRule } = generatedScssMediaOnlyRules

export const GameAvatarStyled = styled.div`
  position: fixed;
  left: calc(50% - 300px);

  ${({ isActive = true }) =>
    isActive ?
      { bottom: '0px', height: '480px' }
      : { bottom: '0px', height: '30px' }
  };

  width: 600px;
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

  ${phoneMediaRule} {
    width: 100%;
    ${({ isActive = true }) =>
      isActive ?
        { bottom: '0px', height: '400px' }
        : { bottom: '0px', height: '30px' }
    };
    left: 0;
  }
`

export const AvatarDetails = styled.div`
  display: flex;
  height: 480px;
  width: 100%;
  background: linear-gradient(180deg, rgba(18, 18, 18, 1), rgba(10, 10, 10, .6));
  padding: 20px;
  box-sizing: border-box;
`

export const Divider = styled.div`
  width: 20px;
`
