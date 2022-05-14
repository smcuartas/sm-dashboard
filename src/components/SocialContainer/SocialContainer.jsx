// COMPONENTS
import SocialItem from '../SocialItem/SocialItem'

// STYLES
import Social from './styled-socialcontainer'

function SocialContainer() {
  return (
    <Social>
      <SocialItem
        socialMedia="facebook"
        profile="@nathanf"
        followers="1987"
        data="12"
        alert={true}
      />
      <SocialItem
        socialMedia="twitter"
        profile="@nathanf"
        followers="1044"
        data="99"
        alert={true}
      />
      <SocialItem
        socialMedia="instagram"
        profile="@realnathanf"
        followers="11k"
        data="1099"
        alert={true}
      />
      <SocialItem
        socialMedia="youtube"
        profile="Nathan F."
        followers="8239"
        data="144"
        alert={false}
      />
    </Social>
  )
}

export default SocialContainer
