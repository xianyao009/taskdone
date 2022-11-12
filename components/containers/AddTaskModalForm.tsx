import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

type FormValuesTypes = {
  task: string;
  description: string;
};

type AddTaskModalFormProps = {
  addTask: (data: ITodoType) => void;
};

const AddTaskModalForm = ({ addTask }: AddTaskModalFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit, setFocus, reset } =
    useForm<FormValuesTypes>();

  const TaskInput = () => {
    useEffect(() => {
      setFocus("task");
    });

    return (
      <Input
        id="task"
        type="text"
        placeholder="Grind Leetcode"
        _placeholder={{ opacity: 0.6 }}
        {...register("task")}
      />
    );
  };

  const resetForm = () => {
    reset({ task: "", description: "" });
    onClose();
  };

  const onSubmit = async (values: FormValuesTypes) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({
        title: values.task,
        description: values.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    addTask(data.data);
    resetForm();
  };

  return (
    <>
      <Box textAlign="right">
        <Button onClick={onOpen} my={"4"} colorScheme={"green"} bg={"#16c60c"}>
          Add task
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add a new task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <FormControl isRequired>
                  <FormLabel htmlFor="task">Task</FormLabel>
                  <TaskInput />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea
                    id="description"
                    placeholder="Solve Two Sum, then Valid Palindrome"
                    _placeholder={{ opacity: 0.6 }}
                    {...register("description")}
                    resize="none"
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={resetForm}>
                Cancel
              </Button>
              <Button type="submit" colorScheme={"green"} bg={"#16c60c"}>
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTaskModalForm;
