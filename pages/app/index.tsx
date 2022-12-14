import { useState } from "react";
import LinkContainer from "../../components/containers/LinkContainer";
import AppHeaderSideBarContainer from "../../components/containers/AppHeaderSideBarContainer";
import TodoList from "../../components/containers/TodoList";
import Layout from "../../components/containers/Layout";

import { Box, Button, Center, Text } from "@chakra-ui/react";

type TaskdoneProps = {
  isSuccess: boolean;
  todos: Array<ITodoType>;
};

const FILTER_MAP = {
  Active: (task: { completed: boolean }) => !task.completed,
  Completed: (task: { completed: boolean }) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = ({ isSuccess, todos }: TaskdoneProps) => {
  const [toDoList, setToDoList] = useState(todos);
  const [filter, setFilter] = useState(FILTER_NAMES[0]);

  const filterList = FILTER_NAMES.map((name) => (
    <Button
      variant={name === filter ? "solid" : "ghost"}
      key={name}
      name={name}
      aria-pressed={name === filter}
      onClick={() => setFilter(name)}
    >
      {name}
    </Button>
  ));

  // Re-render the To-do List
  const addTask = (data: ITodoType) => {
    setToDoList((prev) => [...prev, data]);
  };

  const deleteTask = (id: string) => {
    setToDoList((prev) => prev.filter((task) => task._id !== id));
  };

  const editTask = (id: string, title: string, description: string) => {
    const editedToDoList = toDoList.map((task) => {
      if (id === task._id) {
        return { ...task, title: title, description: description };
      }
      return task;
    });
    setToDoList(editedToDoList);
  };

  const toggleTaskCompleted = (id: string, toggledCompleted: boolean) => {
    const updatedToDoList = toDoList.map((task) => {
      if (id === task._id) {
        return { ...task, completed: toggledCompleted };
      }
      return task;
    });
    setToDoList(updatedToDoList);
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
      <Layout title="App - Taskdone">
        <Box>
          <AppHeaderSideBarContainer filterList={filterList} />
          <TodoList
            todos={toDoList}
            addTask={addTask}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleTaskCompleted={toggleTaskCompleted}
            filterMap={FILTER_MAP[filter as keyof typeof FILTER_MAP]}
          />
        </Box>
      </Layout>
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
