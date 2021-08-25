import { useState } from 'react'
import styled from 'styled-components'
import AvatarMenu from '~components/AvatarMenu/AvatarMenu'
import UsernameField from '~components/UsernameField/UsernameField'
import { DEFAULT_ANIMATIONS } from '~constants'
import useMoveOffset from '~hooks/useMoveOffset'

// #region STYLED_COMPONENTS
const AvatarSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`
// #endregion

const MOVE_OFFSET_MAP = Object.freeze({
  'phone': 230,
  'tablet': 340,
  'desktop': 340
})

const AvatarSelection = ({ className }) => {
  const [classes, setClasses] = useState({ ...DEFAULT_ANIMATIONS })
  const [showUsernameField, setShowUsernameField] = useState(false)

  const [moveOffset] = useMoveOffset({ moveOffsetMap: MOVE_OFFSET_MAP })

  return (
    <AvatarSection className={className}>
      <AvatarMenu
        setShowUsernameField={setShowUsernameField}
        showUsernameField={showUsernameField}
        moveOffset={moveOffset}
        setClasses={setClasses}
        classes={classes}
      >
        { showUsernameField && <UsernameField classes={classes} /> }
      </AvatarMenu>
      <span style={{ marginTop: '20px', width: '220px', textAlign: 'center' }}>
        {
          !showUsernameField ?
          'Click on avatar to choose'
          : 'Click again to get list back'
        }
      </span>
    </AvatarSection>
  )
}

export default AvatarSelection
