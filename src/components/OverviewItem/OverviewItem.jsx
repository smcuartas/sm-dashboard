// STYLES
import * as S from './styled-overviewitem'

// HELPERS
import { Icons } from '../../helpers/helpers'

function OverviewItem({ title, socialMedia, views, data, alert }) {
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
          {alert ? <S.Up>{data}%</S.Up> : <S.Down>{data}%</S.Down>}
        </S.CColumn>
      </S.Content>
    </S.Box>
  )
}

export default OverviewItem
