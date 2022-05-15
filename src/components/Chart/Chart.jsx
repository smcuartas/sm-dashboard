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
import data from '../../data/data.json'

// STYLES
import * as S from './styled-chart'

function Chart({ isDarkTheme }) {
  function customTooltype({ active, payload }) {
    if (active) {
      return (
        <S.Tooltip>{`${payload[0].value} new ${payload[0].name}`}</S.Tooltip>
      )
    }
  }

  const YAxisTicks = ['0', '2', '4', '6', '8', '10', '12']

  return (
    <S.Container>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart width={600} height={300} data={data.chartdata}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis
            tickCount={1}
            tickSize={13}
            tickLine={false}
            dataKey="days"
            strokeWidth={1.5}
            stroke={isDarkTheme ? 'white' : '#ccc'}
          />
          <YAxis
            width={25}
            tickSize={10}
            ticks={YAxisTicks}
            minTickGap={10}
            tickLine={false}
            strokeWidth={1.5}
            stroke={isDarkTheme ? 'white' : '#ccc'}
          />
          <Line
            type="monotone"
            dataKey="followers"
            stroke="hsl(243, 51%, 70%)"
            strokeWidth={1.5}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Tooltip content={customTooltype} />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  )
}

export default Chart
