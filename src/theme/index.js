const baseTheme = {
  styles: {
    global: ({ colorMode }) => {
      const lightMode = colorMode !== 'dark'
      return {
        body: {
          fontWeight: '500',
          fontSize: '18px',
          backgroundImage: lightMode
            ? '../images/bg-desktop-light.jpg'
            : '../images/bg-desktop-dark.jpg',
          backgroundSize: { base: 'auto', lg: '100% auto' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundColor: colorMode + '.bg.body'
        },
        p: {
          transition: 'color 100ms ease-in-out'
        },
        '#EnterTask, #TaskList, #TaskFilter': {
          backgroundColor: colorMode + '.bg.task'
        },
        '#Logo': {
          color: colorMode + '.text.logo'
        },
        '#EnterTask': {
          color: colorMode + '.text.input'
        },
        '#Task': {
          color: colorMode + '.text.task'
        },
        '#TaskFilter': {
          color: colorMode + '.text.taskFilter'
        },
        '#TaskFilter .selected': {
          color: colorMode + '.text.selected'
        },
        '#TaskFooter, #Footer': {
          color: colorMode + '.text.taskFooter'
        },
        '#Footer': {
          color: colorMode + '.text.footer'
        },
        '.hover:hover': {
          color: colorMode + '.text.hover'
        }
      }
    }
  },
  colors: {
    light: {
      text: {
        logo: '#F9F9F9',
        task: '#484B6A',
        input: '#484B6A',
        taskFilter: '#9394A4',
        selected: '#6E78ED',
        taskFooter: '#9394A4',
        footer: '#9394A4',
        hover: '#2B2B2B'
      },
      bg: {
        body: '#E4E4F1',
        task: '#F9F9F9'
      }
    },
    dark: {
      text: {
        logo: '#F9F9F9',
        input: '#CACDE8',
        task: '#CACDE8',
        taskFilter: '#777A92',
        taskFilterSelected: '#777A92',
        taskFooter: '#777A92',
        footer: '#777A92',
        hover: '#E4E5F1'
      },
      bg: {
        body: '#161722',
        task: '#25273C'
      }
    }
  }
}

export { baseTheme }
