import styled from 'styled-components'

export const Container = styled.div`
  .recharts-surface {
    overflow: visible;
  }

  .recharts-cartesian-axis-tick {
    font-size: 12px;

    text tspan {
      stroke: ${({ theme }) => theme.charts.axisLine};
      stroke-width: 0.2;
    }
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
      stroke: ${({ theme }) => theme.charts} !important;
    }
  }

  .recharts-curve.recharts-tooltip-cursor {
    display: none;
  }

  .recharts-cartesian-axis-line {
    stroke: ${({ theme }) => theme.charts.axisLine};
  }
`

export const Date = styled.span`
  display: block;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 20px;
  margin-bottom: 35px;

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const Tooltip = styled.span`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.text.secondary};
  color: hsl(243, 51%, 70%);
  background: white;
`
