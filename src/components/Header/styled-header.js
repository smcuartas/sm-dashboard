import styled from 'styled-components'

export const Header = styled.header`
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.text.secondary};
  font-weight: 700;
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    :before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      right: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.bg};
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-image: linear-gradient(
      to right,
      hsl(210, 78%, 56%) 0%,
      hsl(146, 68%, 55%) 100%
    );
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(-26px);
    -ms-transform: translateX(-26px);
    transform: translateX(-26px);
  }
`

export const Column = styled.div`
  :last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  > span {
    margin-right: 10px;
    color: ${({ theme, activeTheme }) => {
      if (activeTheme === true) {
        return theme.text.primary
      } else {
        return theme.text.secondary
      }
    }};
    font-weight: 700;
  }

  @media (max-width: 992px) {
    :last-child {
      position: fixed;
      bottom: 10px;
      right: 0;
      padding: 10px 15px;
      border-radius: 50px 0 0 50px;
      background: ${({ theme }) => theme.cardbg.hover};
      z-index: 10;
    }
  }
`
