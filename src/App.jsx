import { React, useState, useEffect } from 'react'
import { Flex, Box, Text, Grid } from '@chakra-ui/react'

import Logo from './components/Logo'
import ThemeToggler from './components/ThemeToggler'
import EnterTask from './components/EnterTask'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import useWindowWidth from './hooks/useWindowWidth'

import { useLocalStorage } from './hooks/useLocalStorage'

function App ({ onThemeChange }) {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')
  const [activeTasks, setActiveTasks] = useState(0)
  const [showDuplicatedTaskMsg, setShowDuplicatedTaskMsg] = useState(false)
  const width = useWindowWidth()

  useEffect(() => {
    setActiveTasks(
      tasks.reduce((acc, task) => {
        if (task.status === 'active') return acc + 1
        else return acc
      }, 0)
    )
  }, [tasks])

  useEffect(() => {
    if (showDuplicatedTaskMsg) {
      setTimeout(() => {
        setShowDuplicatedTaskMsg(false)
      }, 2000)
    }
  }, [showDuplicatedTaskMsg])

  const addTask = (taskContent) => {
    const newTask = {
      id: new Date().valueOf(),
      content: taskContent,
      status: 'active'
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id
      })
    )
  }

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) { task.status === 'active' ? (task.status = 'completed') : (task.status = 'active') }
        return task
      })
    )
  }

  const clearCompletedTasks = () => {
    setTasks(
      tasks.filter((task) => {
        return task.status !== 'completed'
      })
    )
  }

  return (
    <Flex justify='center' align='center'>
      <Grid
        h=''
        w={{ base: '90%', lg: '50%' }}
        templateRows='5rem auto auto 4rem 2rem'
        gap={5}
        mt='3rem'
      >
        <Flex w='100%' justify='space-between' align='center'>
          <Logo />
          <ThemeToggler onThemeChange={onThemeChange} currentTheme='light' />
        </Flex>
        <Box position='relative'>
          <EnterTask
            tasks={tasks}
            addTask={addTask}
            setShowDuplicatedTaskMsg={setShowDuplicatedTaskMsg}
            h='4rem'
          />
          <Flex
            position='absolute'
            w='100%'
            mt='-7.5rem'
            pointerEvents='none'
          >
            <Text
              borderRadius={5}
              m='0 auto'
              bg='rgba(255, 0, 0, .5)'
              p='.5rem 2rem'
              fontSize='20px'
              opacity={!showDuplicatedTaskMsg && '0'}
              transition='opacity 500ms'
            >
              Task already exists.
            </Text>
          </Flex>
        </Box>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filter={filter}
          setFilter={setFilter}
          activeTasks={activeTasks}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
          clearCompletedTasks={clearCompletedTasks}
          width={width}
        />
        <TaskFilter
          shadow
          show={!(width > 991)}
          filter={filter}
          setFilter={setFilter}
        />
        <Flex align='center' justify='center'>
          <Text id='Footer' fontSize='.8rem'>
            Drag & drop to reorder the list
          </Text>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default App
