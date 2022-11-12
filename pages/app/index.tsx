import { useState } from "react";
import LinkContainer from "../../components/containers/LinkContainer";
import AppHeaderSideBarContainer from "../../components/containers/AppHeaderSideBarContainer";
import TodoList from "../../components/containers/TodoList";

import { Box, Button, Center, Text } from "@chakra-ui/react";

type TaskdoneProps = {
  isSuccess: boolean;
  todos: Array<ITodoType>;
};

const App = ({ isSuccess, todos }: TaskdoneProps) => {
  const [toDoList, setToDoList] = useState(todos);
  // Re-render the To-do List
  const addTask = (data: any) => {
    setToDoList((prev) => [...prev, data]);
  };

  const deleteTask = (id: string) => {
    setToDoList((prev) => prev.filter((task) => task._id !== id));
  };

  if (!isSuccess)
    return (
      <>
        <Center>
          <Text>Failed to load database item.</Text>
          <LinkContainer
            linkTo="https://www.xianyaong.com/contact"
            target="_blank"
          >
            <Button>Contact Me</Button>
          </LinkContainer>
        </Center>
      </>
    );

  return (
    <>
      <Box>
        <AppHeaderSideBarContainer />
        <TodoList todos={toDoList} addTask={addTask} deleteTask={deleteTask} />
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return {
    props: {
      isSuccess: data.success,
      todos: data.todos,
    },
  };
}

export default App;
