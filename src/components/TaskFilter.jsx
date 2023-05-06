import { Box, Text } from '@chakra-ui/react'
import { React } from 'react'

function TaskFilter ({ show, shadow, filter, setFilter }) {
  return (
    <Box
      id='TaskFilter'
      justifyContent='center'
      alignItems='center'
      gap='1.5rem'
      h='4rem'
      fontSize='1rem'
      boxShadow={shadow && '0px 5px 10px rgba(0,0,0,0.2)'}
      borderRadius='5'
      display={show ? 'flex' : 'none'}
    >
      <Text
        cursor='pointer'
        onClick={() => setFilter('all')}
        className={`hover ${filter === 'all' && 'selected'}`}
      >
        All
      </Text>
      <Text
        cursor='pointer'
        onClick={() => setFilter('active')}
        className={`hover ${filter === 'active' && 'selected'}`}
      >
        Active
      </Text>
      <Text
        cursor='pointer'
        onClick={() => setFilter('completed')}
        className={`hover ${filter === 'completed' && 'selected'}`}
      >
        Completed
      </Text>
    </Box>
  )
}

export default TaskFilter
