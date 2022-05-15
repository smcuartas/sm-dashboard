// STYLES
import * as S from './styled-header'

function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <S.Header>
      <S.Column>
        <S.Title>Social Media Dashboard</S.Title>
        <S.Subtitle>Total Followers: 23,004</S.Subtitle>
      </S.Column>

      <S.Column activeTheme={isDarkTheme}>
        <span>Dark Mode</span>
        <S.Switch>
          <input
            type="checkbox"
            value={isDarkTheme}
            onChange={() => setIsDarkTheme(!isDarkTheme)}
          />
          <span className="slider" />
        </S.Switch>
      </S.Column>
    </S.Header>
  )
}

export default Header
