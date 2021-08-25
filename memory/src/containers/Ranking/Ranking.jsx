import DifficultiesMenu from '~components/DifficultiesMenu/DifficultiesMenu'
import CONTROL_LEFT from '~static/images/control-left.svg'
import ControlItemStyled from '~components/ControlItem/ControlItem'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import Container from '~components/Container/Container'
import { sortUsersByOrderAndDifficulty } from '~store/modules/Users/actions'
import Avatar from '~components/Avatar/Avatar'
import AvatarInfo from '~components/AvatarInfo/AvatarInfo'
import useHolderWidth from '~hooks/useHolderWidth'
import {
  AvatarHolder,
  AvatarInfoHolder,
  RankingStyled,
  FilterSectionStyled
} from './RankingStyled'

const Ranking = () => {
  const [dimensions] = useHolderWidth()

  const history = useHistory()

  const { ranking } = useSelector(state => state.users)

  const handleControlItemClick = event => {
    const { target: { name: path } } = event
    history.push(path)
  }

  return (
    <Container
      horizontalAlign={'center'}
    >
      <ControlItemStyled
        name="landing"
        src={CONTROL_LEFT}
        position={'left'}
        onClick={event => handleControlItemClick(event)}
      />
      <FilterSectionStyled>
        <DifficultiesMenu action={sortUsersByOrderAndDifficulty} />
      </FilterSectionStyled>
      <RankingStyled className="entrance-from-right" dimensions={dimensions}>
        {
          ranking.map((rank, index) =>
            <AvatarHolder
              key={rank.username + index}
            >
              <Avatar
                isActiveItem={true}
                currentActiveAvatar={rank.avatar}
              />
              <AvatarInfoHolder>
                <AvatarInfo avatarInfo={[
                  { info: `#${index + 1}`, label: 'RANK' },
                  { info: rank.username, label: 'USERNAME' },
                  { info: rank.score, label: 'SCORE' }
                ]} />
              </AvatarInfoHolder>
            </AvatarHolder>
          )
        }
      </RankingStyled>
    </Container>
  )
}

export default Ranking
