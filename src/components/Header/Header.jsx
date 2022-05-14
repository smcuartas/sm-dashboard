// STYLES
import * as S from './styled-header'

function Header({ theme, setTheme }) {
  return (
    <S.Header>
      <S.Column>
        <S.Title>Social Media Dashboard</S.Title>
        <S.Subtitle>Total Followers: 23,004</S.Subtitle>
      </S.Column>

      <S.Column activeTheme={theme}>
        <span>Dark Mode</span>
        <S.Switch>
          <input
            type="checkbox"
            onChange={() => {
              if (theme) {
                setTheme(false)
              } else {
                setTheme(true)
              }
            }}
          />
          <span className="slider" />
        </S.Switch>
      </S.Column>
    </S.Header>
  )
}

export default Header
