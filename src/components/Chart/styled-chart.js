import styled from 'styled-components'

export const Container = styled.div`
  .recharts-surface {
    overflow: visible;
  }

  .recharts-cartesian-axis-tick {
    font-size: 12px;
  }

  .recharts-cartesian-grid-horizontal,
  .recharts-cartesian-grid-vertical {
    line {
      z-index: -11284579182;
    }
  }

  .recharts-line-dots {
    circle {
      fill: ${({ theme }) => theme.bg};
    }
  }
`

export const Tooltip = styled.span`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.text.secondary};
  color: hsl(243, 51%, 70%);
  background: white;
`
