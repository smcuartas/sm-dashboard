// COMPONENTS
import OverviewItem from '../OverviewItem/OverviewItem'

// DATA
import data from '../../data/data.json'

// STYLE
import * as S from './styled-overviewcontainer'

function OverviewContainer({ isDarkTheme }) {
  return (
    <>
      <S.Subtitle activeTheme={isDarkTheme}>Overview - Today</S.Subtitle>
      <S.Container>
        {data.overviewItems.map((item) => (
          <OverviewItem
            key={item.id}
            title={item.title}
            socialMedia={item.socialMedia}
            views={item.views}
            data={item.data}
            isUp={item.isUp}
          />
        ))}
      </S.Container>
    </>
  )
}

export default OverviewContainer
