import { useState } from 'react'

// COMPONENTS
import Header from '../components/Header/Header'
import SocialContainer from '../components/SocialContainer/socialcontainer'
import OverviewContainer from '../components/OverviewContainer/OverviewContainer'
import Modal from '../components/Modal/Modal'

// STYLES
import GlobalStyle from '../components/Global/styled-global'

function Home({ isDarkTheme, setIsDarkTheme }) {
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleModal = () => {
    if (!modal) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 0)
    } else {
      setAnimateModal(false)

      setTimeout(() => {
        setModal(false)
      }, 500)
    }
  }

  return (
    <>
      <GlobalStyle modal={modal} />
      <main>
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <SocialContainer handleModal={handleModal} />
        <OverviewContainer
          isDarkTheme={isDarkTheme}
          handleModal={handleModal}
        />

        {modal && (
          <Modal
            isDarkTheme={isDarkTheme}
            handleModal={handleModal}
            animateModal={animateModal}
          />
        )}
      </main>
    </>
  )
}

export default Home
