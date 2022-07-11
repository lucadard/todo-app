import React from "react";
import { Grid, Flex, Text } from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";
import TaskFilter from "./TaskFilter";

function TaskList({
  width,
  tasks,
  setTasks,
  deleteTask,
  toggleTaskStatus,
  clearCompletedTasks,
  activeTasks,
  filter,
  setFilter,
}) {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const tasksCopy = [...tasks];
    const [reorderedItem] = tasksCopy.splice(result.source.index, 1);
    tasksCopy.splice(result.destination.index, 0, reorderedItem);
    setTasks(tasksCopy);
  };

  return (
    <Grid
      id="TaskList"
      w="100%"
      h="100%"
      boxShadow="0px 5px 10px rgba(0,0,0,0.2)"
      borderRadius="5"
      templateRows="auto auto"
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <Flex
              direction="column"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => {
                if (filter === "all" || filter === task.status)
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.content}
                      index={index}
                      isDragDisabled={filter !== "all"}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Task
                            task={task}
                            deleteTask={deleteTask}
                            toggleTaskStatus={toggleTaskStatus}
                            filter={filter}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
              })}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
      <Flex
        id="TaskFooter"
        h="4rem"
        fontSize={{ base: "1rem", lg: ".8rem" }}
        justify="space-between"
        m="0 2rem"
        align="center"
      >
        <Text>{activeTasks} items left</Text>
        <TaskFilter
          show={width <= 991 ? false : true}
          filter={filter}
          setFilter={setFilter}
        />
        <Text cursor="pointer" onClick={clearCompletedTasks} className="hover">
          Clear Completed
        </Text>
      </Flex>
    </Grid>
  );
}

export default TaskList;
