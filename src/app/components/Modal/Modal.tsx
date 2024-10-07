import { ReactElement } from "react";
import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export interface ModalProps {
  title: string;
  body: ReactElement;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ title, body, isOpen, onClose }: ModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalBody>
          <Box className="flex flex-col gap-4 text-zinc-500">{body}</Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
