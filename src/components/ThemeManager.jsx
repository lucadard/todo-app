import { useState } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import App from '../App'
import { baseThemeOverrides, secondThemeOverrides } from '../theme'

import { useLocalStorage } from '../hooks/useLocalStorage'

const baseTheme = extendTheme(baseThemeOverrides)
const secondTheme = extendTheme(secondThemeOverrides, baseTheme)

function ThemeManager () {
  const [theme, setTheme] = useLocalStorage('chakra-ui-color-mode', 'light')
  const [currentTheme, setCurrentTheme] = useState(() => {
    return theme === 'light' ? baseTheme : secondTheme
  })

  const onThemeChange = () => {
    if (theme === 'light') {
      setCurrentTheme(secondTheme)
      setTheme('dark')
    } else {
      setCurrentTheme(baseTheme)
      setTheme('light')
    }
  }

  return (
    <ChakraProvider theme={currentTheme}>
      <App onThemeChange={onThemeChange} />
    </ChakraProvider>
  )
}

export default ThemeManager
