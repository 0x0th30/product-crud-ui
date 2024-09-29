import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Modal as ChakraModal,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { createProduct } from "@/app/httpClient";

export interface ModalProps {
  isOpen: any;
  onClose: any;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
    createProduct(values.code, values.name, values.price, values.quantity);
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add product</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="flex flex-col gap-4 text-zinc-500">
                <FormControl isRequired>
                  <FormLabel>Code</FormLabel>
                  <Input id="code" placeholder="CP020" {...register("code")} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    id="name"
                    placeholder="Valve Control System"
                    {...register("name")}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input
                    id="price"
                    placeholder="199.99"
                    {...register("price")}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Quantity</FormLabel>
                  <NumberInput>
                    <NumberInputField id="quantity" {...register("quantity")} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

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
