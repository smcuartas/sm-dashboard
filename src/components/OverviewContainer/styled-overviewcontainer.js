import styled from 'styled-components'

export const Subtitle = styled.h2`
  font-weight: 700;
  color: ${({ theme, activeTheme }) =>
    activeTheme ? theme.text.primary : theme.text.secondary};
`

export const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
