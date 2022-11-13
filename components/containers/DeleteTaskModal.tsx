import { AiOutlineDelete } from "react-icons/ai";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Tooltip,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

type DeleteTaskModalProps = {
  task: string;
  id: string;
  deleteTask: (id: string) => void;
};

const DeleteTaskModal = ({ task, id, deleteTask }: DeleteTaskModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const confirmDelete = async () => {
    await fetch("/api/todos/" + id, {
      method: "DELETE",
      body: JSON.stringify({
        _id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    deleteTask(id);
  };

  return (
    <>
      <Tooltip hasArrow label="Delete" openDelay={500}>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="delete"
          icon={<AiOutlineDelete fontSize="25" />}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete task</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <Text as="b">{task}</Text>?
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={confirmDelete} colorScheme={"red"}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteTaskModal;
