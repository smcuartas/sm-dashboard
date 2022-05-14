import styled from 'styled-components'

// MEDIA
import iUp from '../../img/icon-up.svg'
import iDown from '../../img/icon-down.svg'

export const Box = styled.article`
  display: block;
  position: relative;
  border-radius: 5px;
  padding: 30px;
  background: ${({ theme }) => theme.cardbg};
  overflow: hidden;
  cursor: pointer;

  :hover {
    transform: translateY(5px);
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

  :last-child {
    justify-content: flex-end;
  }
`

export const Up = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: hsl(163, 72%, 41%);
  font-size: 14px;
  font-weight: 700;

  :before {
    content: url(${iUp});
    margin-right: 5px;
    transform: translateY(-2px);
  }
`

export const Down = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: hsl(356, 69%, 56%);
  font-size: 14px;
  font-weight: 700;

  :before {
    content: url(${iDown});
    margin-right: 5px;
    transform: translateY(-2px);
  }
`
