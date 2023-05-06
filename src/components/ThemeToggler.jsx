import { Box, useColorMode } from '@chakra-ui/react'
import { React } from 'react'

function ThemeToggler ({ onThemeChange }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      id='Toggler'
      fontSize='2rem'
      cursor='pointer'
      userSelect='none'
      lineHeight='100%'
      onClick={() => toggleColorMode()}
    >
      {colorMode === 'dark' ? '☀️' : '🌙'}
    </Box>
  )
}

export default ThemeToggler
