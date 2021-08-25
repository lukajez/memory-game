import AVATAR_ONE_IMG from '~static/images/avatars/avatar-one.png'
import AVATAR_ONE_VID from '~static/videos/avatar-one-vid.webm'
import AVATAR_TWO_IMG from '~static/images/avatars/avatar-two.png'
import AVATAR_TWO_VID from '~static/videos/avatar-two-vid.webm'
import AVATAR_THREE_IMG from '~static/images/avatars/avatar-three.png'
import AVATAR_THREE_VID from '~static/videos/avatar-three-vid.webm'

export const AVATARS = Object.freeze([
  {
    name: 'Auckes WITCHER',
    image: AVATAR_ONE_IMG,
    video: AVATAR_ONE_VID
  },
  {
    name: 'Legolas ELF',
    image: AVATAR_TWO_IMG,
    video: AVATAR_TWO_VID
  },
  {
    name: 'Aragorn Human',
    image: AVATAR_THREE_IMG,
    video: AVATAR_THREE_VID
  }
])

export const DEFAULT_ANIMATIONS = Object.freeze({
  currentElementClass: 'entrence-fade-in',
  usernameClass: 'leave-fade-out',
  activeAvatarClass: 'move-avatar-back'
})

export const NO_ANIMATIONS = Object.freeze({
  currentElementClass: '',
  usernameClass: '',
  activeAvatarClass: ''
})

export const ANIMATION_PAIRS = Object.freeze({
  'entrence-fade-in': 'leave-fade-out',
  'leave-fade-out': 'entrence-fade-in',
  'move-avatar-back': 'move-avatar-top',
  'move-avatar-top': 'move-avatar-back'
})
