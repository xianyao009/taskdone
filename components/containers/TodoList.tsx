import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";
import AddTaskModalForm from "./AddTaskModalForm";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Checkbox,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type TodoListProps = {
  todos: Array<ITodoType>;
  addTask: (data: ITodoType) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, title: string, description: string) => void;
  toggleTaskCompleted: (id: string, isCompleted: boolean) => void;
  filterMap: (task: { completed: boolean }) => boolean;
};

const TodoList = ({
  todos,
  addTask,
  deleteTask,
  editTask,
  toggleTaskCompleted,
  filterMap,
}: TodoListProps) => {
  const expandedColors = useColorModeValue("gray.100", "gray.700");

  const checkboxChanged = async (id: string, isCompleted: boolean) => {
    await fetch("/api/todos/" + id, {
      method: "PUT",
      body: JSON.stringify({
        completed: !isCompleted,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toggleTaskCompleted(id, !isCompleted);
  };

  return (
    <>
      <Center>
        <Box ml={{ base: 0, md: 60 }} w="60%" mb={20}>
          <AddTaskModalForm addTask={addTask} />
          <Accordion allowMultiple>
            {todos.filter(filterMap).map((todo: ITodoType) => (
              <AccordionItem key={todo._id}>
                <AccordionButton _expanded={{ bg: expandedColors }} p={4}>
                  <Checkbox
                    size="lg"
                    colorScheme="green"
                    borderColor="gray.500"
                    defaultChecked={todo.completed}
                    onChange={() => checkboxChanged(todo._id, todo.completed)}
                  />
                  <Box ml={4} flex="1" textAlign="left">
                    <Text as={todo.completed ? "s" : "b"}>{todo.title}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel m="2">
                  <Text as={todo.completed ? "s" : "abbr"}>{todo.description}</Text>
                  <Box textAlign="right">
                    <EditTaskModal todo={todo} editTask={editTask} />
                    <DeleteTaskModal
                      task={todo.title}
                      id={todo._id}
                      deleteTask={deleteTask}
                    />
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Center>
    </>
  );
};

export default TodoList;
