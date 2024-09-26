import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Modal from "../Modal/Modal";

export default function TableHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="flex flex-row gap-2 m-3 my-5">
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Button colorScheme="blue" size="sm">
        Upload file
      </Button>
    </Box>
  );
}
