// COMPONENTS
import Status from '../Status/Status'

// STYLES
import * as S from './styled-socialitem'

// ICONS
import iFacebook from '../../img/icon-facebook.svg'
import iInstagram from '../../img/icon-instagram.svg'
import iTwitter from '../../img/icon-twitter.svg'
import iYoutube from '../../img/icon-youtube.svg'

const Icons = {
  facebook: iFacebook,
  instagram: iInstagram,
  twitter: iTwitter,
  youtube: iYoutube,
}

function SocialItem({
  socialMedia,
  profile,
  followers,
  data,
  isUp,
  handleModal,
}) {
  return (
    <S.Box socialMedia={socialMedia} onClick={handleModal}>
      <S.SocialProfile>
        <img src={Icons[socialMedia]} alt="Social Icon" />
        <span>{profile}</span>
      </S.SocialProfile>

      <S.Followers>
        <span className="total_followers">{followers}</span>
        <span className="followers">
          {socialMedia === 'youtube' ? 'Subscribers' : 'Followers'}
        </span>
      </S.Followers>
      <Status position="social" isUp={isUp}>
        {data} Today
      </Status>
    </S.Box>
  )
}

export default SocialItem
