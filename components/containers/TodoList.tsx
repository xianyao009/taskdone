import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Checkbox,
  useColorModeValue,
} from "@chakra-ui/react";

type TodoListProps = {
  todos: Array<ITodoType>;
};

const TodoList = ({ todos }: TodoListProps) => {
  const expandedColors = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Center>
        <Box ml={{ base: 0, md: 60 }} maxW="70%">
          <Accordion allowMultiple>
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
                <AccordionPanel>{todo.description}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Center>
    </>
  );
};

export default TodoList;
