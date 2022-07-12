const baseThemeOverrides = {
    styles: {
        global: {
            body: {
                fontFamily: 'Josefin Sans',
                fontWeight: '700',
                fontSize: '18px',
                backgroundImage: "../images/bg-desktop-light.jpg",
                backgroundSize: { base: 'auto', lg: '100% auto' },
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'top center',
                backgroundColor: "bg.body",
                transition: 'none',
            },
            p: {
                transition: 'color 100ms ease-in-out',
            },
            '#EnterTask, #TaskList, #TaskFilter': {
                backgroundColor: 'bg.task',
            },
            '#Logo': {
                color: 'text.logo',
            },
            '#EnterTask': {
                color: 'text.input'
            },
            '#Task': {
                color: 'text.task',
            },
            '#TaskFilter': {
                color: 'text.taskFilter'
            },
            '#TaskFilter .selected': {
                color: 'text.selected'
            },
            '#TaskFooter, #Footer': {
                color: 'text.taskFooter'
            },
            '#Footer': {
                color: 'text.footer'
            },
            '.hover:hover': {
                color: 'text.hover',
            }
        }
    },
    colors: {
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
    components: {
        Checkbox: {
            variants: {
                primary: {
                    border: '1px solid black',
                }
            }
        },
    }
}

const secondThemeOverrides = {
    styles: {
        global: {
            body: {
                backgroundImage: "../images/bg-desktop-dark.jpg",
            }
        }
    },
    colors: {
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
};

export { baseThemeOverrides, secondThemeOverrides };