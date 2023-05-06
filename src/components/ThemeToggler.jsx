import { Box, useColorMode } from '@chakra-ui/react'
import { React } from 'react'

function ThemeToggler ({ onThemeChange }) {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      id='Toggler'
      fontSize='2rem'
      cursor='pointer'
      border='1px'
      lineHeight='100%'
      onClick={() => toggleColorMode()}
    >
      {window.localStorage.getItem('chakra-ui-color-mode') === '"light"'
        ? 'T'
        : 'T'}
    </Box>
  )
}

export default ThemeToggler
