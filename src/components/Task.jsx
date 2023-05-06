import { Grid, Checkbox, Text, Flex, Box, useColorMode } from '@chakra-ui/react'
import { React, useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'

function Task ({ task, deleteTask, toggleTaskStatus, filter }) {
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const { colorMode } = useColorMode()

  return (
    <Grid
      id='Task'
      templateColumns='5% auto 5%'
      h='4rem'
      position='relative'
      alignItems='center'
      borderBottom='1px solid rgba(0,0,0,.1)'
      margin='0 2rem'
      cursor='default'
      onMouseEnter={() => setShowCloseIcon(true)}
      onMouseLeave={() => setShowCloseIcon(false)}
    >
      <Checkbox
        id='TaskCheckbox'
        variant='circular'
        borderColor={colorMode === 'light' ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,255,.3)'}
        size='lg'
        defaultChecked={task.status === 'completed'}
        onChange={() => toggleTaskStatus(task.id)}
      />
      <Text
        title={task.content}
        overflow='hidden'
        textOverflow='ellipsis'
        whiteSpace='nowrap'
        padding='0 2rem'
        sx={
            task.status === 'completed' && {
              opacity: '.3',
              textDecoration: 'line-through'
            }
          }
      >
        {task.content}
      </Text>
      {showCloseIcon &&
        <CloseIcon
          ms='auto'
          cursor='pointer'
          onClick={() => deleteTask(task.id)}
        />}
    </Grid>
  )
}

export default Task
