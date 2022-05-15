import styled from 'styled-components'

export const Box = styled.article`
  display: block;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
  background: ${({ theme }) => theme.cardbg.normal};
  overflow: hidden;
  cursor: pointer;

  .socialStatus {
    justify-content: center;
  }

  :hover {
    transform: translateY(5px);
    background: ${({ theme }) => theme.cardbg.hover};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.5px;
    background: ${({ theme, socialMedia }) => {
      if (socialMedia === 'facebook') {
        return theme.social.fb
      } else if (socialMedia === 'youtube') {
        return theme.social.yt
      } else if (socialMedia === 'twitter') {
        return theme.social.tw
      } else {
        return null
      }
    }};
    background-image: linear-gradient(
      to right,
      ${({ theme, socialMedia }) => {
        if (socialMedia === 'instagram') {
          return theme.social.ig
        } else {
          return null
        }
      }}
    );
  }
`

export const SocialProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    margin-left: 5px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.secondary};
  }
`

export const Followers = styled.div`
  margin: 25px 0;

  span {
    display: block;
  }

  .total_followers {
    font-size: 60px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.primary};
  }

  .followers {
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.text.primary};
  }
`
