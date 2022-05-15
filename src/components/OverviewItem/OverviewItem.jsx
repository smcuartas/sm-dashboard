// COMPONENTS
import Status from '../Status/Status'

// STYLES
import * as S from './styled-overviewitem'

// HELPERS
import { Icons } from '../../helpers/helpers'

function OverviewItem({ title, socialMedia, views, data, isUp }) {
  return (
    <S.Box>
      <S.Heading>
        <S.HColumn>
          <h3 className="views-title">{title}</h3>
        </S.HColumn>
        <S.HColumn>
          <img src={Icons[socialMedia]} alt="Social Icon" />
        </S.HColumn>
      </S.Heading>

      <S.Content>
        <S.CColumn>
          <span className="views">{views}</span>
        </S.CColumn>

        <S.CColumn>
          <Status position="overview" isUp={isUp}>
            {data}%
          </Status>
        </S.CColumn>
      </S.Content>
    </S.Box>
  )
}

export default OverviewItem
