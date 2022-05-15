import { useState } from 'react'

// VIEWS
import Home from './views/Home'

// THEMES
import { ThemeProvider } from 'styled-components'
import dark from './themes/Dark'
import light from './themes/Light'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <Home isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  )
}

export default App
