import { useState } from 'react'

// COMPONENTS
import SocialItem from '../SocialItem/SocialItem'

// DATA
import Data from '../../data/data.json'

// STYLES
import Social from './styled-socialcontainer'

function SocialContainer({ handleModal }) {
  return (
    <Social>
      {Data.socialItems.map((item) => (
        <SocialItem
          key={item.id}
          socialMedia={item.socialMedia}
          profile={item.profile}
          followers={item.followers}
          data={item.data}
          isUp={item.isUp}
          handleModal={handleModal}
        />
      ))}
    </Social>
  )
}

export default SocialContainer
