import styled from 'styled-components'

// MEDIA
import iUp from '../../img/icon-up.svg'
import iDown from '../../img/icon-down.svg'

const StatusInfo = styled.span`
  position: relative;
  display: flex;
  color: ${({ isUp }) => (isUp ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)')};
  font-size: 14px;
  font-weight: 700;
  width: 100%;

  :before {
    content: url(${({ isUp }) => (isUp ? iUp : iDown)});
    margin-right: 5px;
    transform: translateY(-2px);
  }

  &.social {
    justify-content: center;
  }

  &.overview {
    justify-content: flex-end;
  }

  &.modal {
    font-size: 40px;
    margin-right: 10px;
    width: auto;

    :before {
      transform: translateY(-13px);
    }
  }
`

export default StatusInfo
