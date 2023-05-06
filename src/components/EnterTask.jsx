import { Grid, Input, Checkbox, useColorMode } from '@chakra-ui/react'
import { React, useState } from 'react'

function EnterTask ({ tasks, addTask, setShowDuplicatedTaskMsg }) {
  const [input, setInput] = useState('')
  const { colorMode } = useColorMode()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') return
    if (isTaskDuplicate(input)) return setShowDuplicatedTaskMsg(true)
    addTask(input)
    setInput('')
  }

  const isTaskDuplicate = (taskContent) => {
    if (tasks.some((task) => task.content === taskContent)) return true
    return false
  }

  return (
    <Grid
      id='EnterTask'
      borderRadius='5'
      templateColumns='15% auto'
      justif='center'
      h='4rem'
      borderBottom='1px solid rgba(0,0,0,0.2)'
    >
      <Checkbox
        pointerEvents='none'
        borderColor={colorMode === 'light' ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,255,.3)'}
        size='lg'
        borderRadius=''
        margin='0 auto'
      />
      <form onSubmit={handleSubmit}>
        <Input
          h='100%'
          fontSize='18px'
          fontWeight='inherit'
          border='none'
          p='0 1rem 0 0'
          placeholder='Create a new todo...'
          focusBorderColor='transparent'
          transition='inherit'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
    </Grid>
  )
}

export default EnterTask
