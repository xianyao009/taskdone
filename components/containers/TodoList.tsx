import DeleteTaskModal from "./DeleteTaskModal";
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
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

type TodoListProps = {
  todos: Array<ITodoType>;
  addTask: (data: ITodoType) => void;
  deleteTask: (id: string) => void;
};

const TodoList = ({ todos, addTask, deleteTask }: TodoListProps) => {
  const expandedColors = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Center>
        <Box ml={{ base: 0, md: 60 }} w="60%" mb={20}>
          <AddTaskModalForm addTask={addTask} />
          <Accordion defaultIndex={[0]} allowMultiple>
            {todos.map((todo: ITodoType) => (
              <AccordionItem key={todo._id}>
                <AccordionButton _expanded={{ bg: expandedColors }} p={4}>
                  <Checkbox
                    size="lg"
                    colorScheme="green"
                    borderColor="gray.500"
                  />
                  <Box ml={4} flex="1" textAlign="left">
                    {todo.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel m="2">
                  {todo.description}
                  <DeleteTaskModal
                    task={todo.title}
                    id={todo._id}
                    deleteTask={deleteTask}
                  />
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
