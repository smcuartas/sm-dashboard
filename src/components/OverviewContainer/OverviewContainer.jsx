// COMPONENTS
import OverviewItem from '../OverviewItem/OverviewItem'

// DATA
import data from '../../data/data.json'

// STYLE
import * as S from './styled-overviewcontainer'

function OverviewContainer({ isDarkTheme, handleModal }) {
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
            handleModal={handleModal}
          />
        ))}
      </S.Container>
    </>
  )
}

export default OverviewContainer
