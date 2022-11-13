import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  Textarea,
  Tooltip,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

type FormValuesTypes = {
  task: string;
  description: string;
};

type EditTaskModalProps = {
  todo: ITodoType;
  editTask: (id: string, title: string, description: string) => void;
};

const EditTaskModal = ({ todo, editTask }: EditTaskModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm<FormValuesTypes>({
    defaultValues: {
      task: todo.title,
      description: todo.description,
    },
  });

  const onSubmit = async (values: FormValuesTypes) => {
    const res = await fetch("/api/todos/" + todo._id, {
      method: "PUT",
      body: JSON.stringify({
        title: values.task,
        description: values.description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    editTask(todo._id, data.data.title, data.data.description);
    onClose();
  };

  return (
    <>
      <Tooltip hasArrow label="Edit" openDelay={500}>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="edit"
          icon={<AiOutlineEdit fontSize="25" />}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Edit task</ModalHeader>
            <ModalBody>
              <Stack>
                <FormControl isRequired>
                  <FormLabel htmlFor="task">Task</FormLabel>
                  <Input id="task" type="text" {...register("task")} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea
                    id="description"
                    {...register("description")}
                    resize="none"
                  />
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" colorScheme={"blue"}>
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditTaskModal;
