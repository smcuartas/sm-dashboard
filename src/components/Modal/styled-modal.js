import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 0px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition-duration: 0.5s;
  padding: 30px 15px;
  box-sizing: border-box;

  &.animate {
    opacity: 1;
  }
`

export const ModalContent = styled.div`
  display: block;
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 992px;
  border-radius: 20px;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
`

export const Header = styled.div`
  display: block;
  padding: 50px 50px 25px 50px;
  background: ${({ theme }) => theme.topbg};
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.text.primary};
  font-size: 30px;
`

export const SocialProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;

  span {
    font-size: 14px;
    margin-left: 5px;
    font-weight: 700;
    color: hsl(228, 34%, 66%);
  }
`

export const InfoRow = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    :not(:last-child) {
      padding-right: 40px;
    }
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Followers = styled.span`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 40px;
  font-weight: 700;
  width: autohku;
  margin-right: 10px;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.text.secondary};

  span {
    width: 100%;
    display: block;
  }

  @media (max-width: 992px) {
    span {
      display: inline;
    }
  }
`

export const CloseModal = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  font-weight: 700;

  img {
    filter: ${({ activeTheme }) => (activeTheme ? 'invert(1)' : null)};
  }
`

export const Graphic = styled.div`
  padding: 35px 50px 50px 50px;

  @media (max-width: 767px) {
    padding: 35px 20px 50px 20px;
  }
`
