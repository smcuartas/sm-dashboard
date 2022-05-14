// COMPONENTS
import OverviewItem from '../OverviewItem/OverviewItem'

// STYLE
import * as S from './styled-overviewcontainer'

function OverviewContainer({ theme }) {
  return (
    <>
      <S.Subtitle activeTheme={theme}>Overview - Today</S.Subtitle>
      <S.Container>
        <OverviewItem
          title="Page Views"
          socialMedia="facebook"
          views={87}
          data={3}
          alert={true}
        />

        <OverviewItem
          title="Likes"
          socialMedia="facebook"
          views={52}
          data={2}
          alert={false}
        />

        <OverviewItem
          title="Likes"
          socialMedia="instagram"
          views={5462}
          data={2257}
          alert={true}
        />

        <OverviewItem
          title="Profile Views"
          socialMedia="instagram"
          views="52k"
          data={1375}
          alert={true}
        />

        <OverviewItem
          title="Retweets"
          socialMedia="twitter"
          views={117}
          data={303}
          alert={true}
        />

        <OverviewItem
          title="Likes"
          socialMedia="twitter"
          views={507}
          data={553}
          alert={true}
        />

        <OverviewItem
          title="Likes"
          socialMedia="youtube"
          views={107}
          data={19}
          alert={false}
        />

        <OverviewItem
          title="Total Views"
          socialMedia="youtube"
          views={1407}
          data={12}
          alert={false}
        />
      </S.Container>
    </>
  )
}

export default OverviewContainer
