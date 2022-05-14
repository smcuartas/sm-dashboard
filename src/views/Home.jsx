// COMPONENTS
import Header from '../components/Header/Header'
import SocialContainer from '../components/SocialContainer/socialcontainer'
import OverviewContainer from '../components/OverviewContainer/OverviewContainer'

// STYLES
import GlobalStyle from '../components/Global/styled-global'

function Home({ theme, setTheme }) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header theme={theme} setTheme={setTheme} />
        <SocialContainer />
        <OverviewContainer theme={theme} />
      </main>
    </>
  )
}

export default Home
