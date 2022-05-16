import styled from 'styled-components'

// MEDIA
import iUp from '../../img/icon-up.svg'
import iDown from '../../img/icon-down.svg'

export const Box = styled.article`
  display: block;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  background: ${({ theme }) => theme.cardbg.normal};
  overflow: hidden;
  cursor: pointer;

  :hover {
    transform: translateY(5px);
    background: ${({ theme }) => theme.cardbg.hover};
  }
`

export const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
`

export const HColumn = styled.div`
  display: flex;
  align-items: center;

  .views-title {
    color: ${({ theme }) => theme.text.secondary};
    font-size: 16px;
  }

  :last-child {
    justify-content: flex-end;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`

export const CColumn = styled.div`
  display: flex;
  align-items: flex-end;

  .views {
    color: ${({ theme }) => theme.text.primary};
    font-size: 40px;
    font-weight: 700;
  }
`
