import { Box, Button } from "@chakra-ui/react";
import Modal from "../Modal/Modal";

export interface ActionBarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setProducts: (x: any) => void;
}

export default function ActionBar({
  isOpen,
  onOpen,
  onClose,
  setProducts,
}: ActionBarProps) {
  return (
    <Box className="flex flex-row gap-2 m-3 my-5">
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} setProducts={setProducts} />
      <Button colorScheme="blue" size="sm">
        Upload file
      </Button>
    </Box>
  );
}
