// STYLE
import StatusInfo from './styled-status'

function Status({ isUp, children, position }) {
  return (
    <StatusInfo className={position} isUp={isUp}>
      {children}
    </StatusInfo>
  )
}

export default Status
