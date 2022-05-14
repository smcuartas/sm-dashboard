import { useState } from 'react'

// VIEWS
import Home from './views/Home'

// THEMES
import { ThemeProvider } from 'styled-components'
import dark from './themes/Dark'
import light from './themes/Light'

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Home theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  )
}

export default App
