import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// DATA
import chart from '../../data/chart.json'

// STYLES
import * as S from './styled-chart'

function Chart({ isDarkTheme }) {
  function customTooltip({ active, payload }) {
    if (active) {
      return (
        <S.Tooltip>{`${payload[0].value} new ${payload[0].name}`}</S.Tooltip>
      )
    }
  }

  const YAxisTicks = ['0', '2', '4', '6', '8', '10', '12']

  return (
    <S.Container>
      <S.Date>May 4 - May 13</S.Date>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart width={600} height={300} data={chart.chartdata}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis
            tickCount={1}
            tickSize={13}
            tickLine={false}
            dataKey="days"
            strokeWidth={1.5}
          />
          <YAxis
            width={25}
            tickSize={10}
            ticks={YAxisTicks}
            minTickGap={10}
            tickLine={false}
            strokeWidth={1.5}
          />
          <Line
            animationBegin={0}
            animationDuration={0}
            type="monotone"
            dataKey="followers"
            stroke="hsl(243, 51%, 70%)"
            strokeWidth={1.5}
            dot={{ r: 5 }}
            activeDot={{ r: 7, stroke: null }}
          />
          <Tooltip content={customTooltip} />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  )
}

export default Chart
