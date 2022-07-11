import { Grid, Checkbox, Text, Flex, Box } from "@chakra-ui/react";
import { React, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

function Task({ task, deleteTask, toggleTaskStatus, filter }) {
  const [closeIconShow, setCloseIconShow] = useState(false);
  const toggleCloseIcon = () => {
    setCloseIconShow(!closeIconShow);
  };

  return (
    <Grid
      id="Task"
      templateColumns="15% auto"
      justif="center"
      h="4rem"
      position="relative"
    >
      <Checkbox
        variant="primary"
        size="lg"
        margin="0 auto"
        defaultChecked={task.status === "completed"}
        onChange={() => toggleTaskStatus(task.id)}
      />
      <Flex
        justify="space-between"
        align="center"
        onClick={() => deleteTask(task.id)}
        cursor={filter === "all" ? "move" : "pointer"}
        onMouseEnter={toggleCloseIcon}
        onMouseLeave={toggleCloseIcon}
      >
        <Text
          sx={
            task.status === "completed" && {
              opacity: ".3",
              textDecoration: "line-through",
            }
          }
        >
          {task.content}
        </Text>
        <CloseIcon me="2rem" opacity={!closeIconShow ? "0" : ".5"} />
      </Flex>
      <Box
        position="absolute"
        bottom="0"
        w="92%"
        m="0 4%"
        h="1px"
        bg="rgba(0,0,0,.1)"
      />
    </Grid>
  );
}

export default Task;
