import { useForm } from "react-hook-form";
import {
  Box,
  Text,
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { uploadFile } from "@/app/httpClient";

export interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  file: any;
  setFile: (file: any) => void;
}

export default function UploadFileModal({
  isOpen,
  onOpen,
  onClose,
  file,
  setFile,
}: ModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    uploadFile(file);
    onClose();
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload file to bulk creation</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <br />
            <Text>Upload a CSV file to create multiple products from it.</Text>
            <br />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="flex flex-col gap-4 text-zinc-500">
                <input
                  type="file"
                  onChange={(event) => setFile(event.target.files![0])}
                />

                <Button onClick={onClose}>Close</Button>
                <Button variant="ghost" type="submit">
                  Save
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </>
    </ChakraModal>
  );
}
