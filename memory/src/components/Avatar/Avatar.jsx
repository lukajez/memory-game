import { AvatarStyled } from './AvatarStyled'
// import AVATAR_ONE_IMG from '../static/images/avatars/avatar-one.png'

const Avatar = ({
  isActiveItem,
  className,
  playVideo,
  currentActiveAvatar: {
    image,
    video
  } = {},
  handleAvatarClick = () => ({})
}) => {
  const avatarClickHandler = () => handleAvatarClick()

  return (
  <AvatarStyled
    className={className}
    onClick={() => isActiveItem && avatarClickHandler()}
    isActiveItem={isActiveItem}
    backgroundImageUrl={image}
  >
    {
      playVideo &&
      <video
        src={video}
        poster={image}
        type="video/webm"
        autoPlay
        loop
        muted
      />
    }
  </AvatarStyled>
)}

export default Avatar
