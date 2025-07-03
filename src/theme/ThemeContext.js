
import { createContext, useMemo, useState, useContext, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = createContext()
export const useColorMode = () => useContext(ColorModeContext)

const ThemeWrapper = ({ children }) => {
  const [mode, setMode] = useState('light')

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    },
    mode
  }), [mode])

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: '#9130ff'
      },
      background: {
        default: mode === 'light' ? '#f5f7fb' : '#1e1e1e',
        paper: mode === 'light' ? '#fff' : '#2c2c2c'
      },
      text: {
        primary: mode === 'light' ? '#444' : '#fff',
        secondary: mode === 'light' ? '#666' : '#ccc'
      }
    },
    typography: {
      fontFamily: 'Poppins, sans-serif'
    }
  }), [mode])

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark')
  }, [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemeWrapper




