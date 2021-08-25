import {
  AvatarInfoHolder,
  SingleInfoStyled,
  LabelStyled,
  InfoStyled
} from './AvatarInfoStyled'

const AvatarInfo = ({ avatarInfo }) => {
  return (
    <AvatarInfoHolder>
      {
        avatarInfo.map(singleInfo => (
          <SingleInfoStyled key={singleInfo.label}>
            <LabelStyled>{singleInfo.label}</LabelStyled>
            <InfoStyled>{singleInfo.info}</InfoStyled>
          </SingleInfoStyled>
        ))
      }
    </AvatarInfoHolder>
  )
}

export default AvatarInfo
