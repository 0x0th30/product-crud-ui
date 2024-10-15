import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Modal from "../Modal/Modal";
import { FieldValues, useForm } from "react-hook-form";
import { FormEventHandler } from "react";

export interface ActionBarProps {
  onSubmitCreateProduct: (data: FieldValues) => void;
  onSubmitUploadFile: () => void;
  onChangeUploadFile: FormEventHandler;
}

export default function ActionBar({
  onSubmitCreateProduct,
  onSubmitUploadFile,
  onChangeUploadFile,
}: ActionBarProps) {
  const {
    register: registerCreateProduct,
    handleSubmit: createProductHandleSubmit,
  } = useForm();
  const { handleSubmit: uploadFileHandleSubmit } = useForm();

  const {
    isOpen: createProductIsOpen,
    onOpen: createProductOnOpen,
    onClose: createProductOnClose,
  } = useDisclosure();
  const {
    isOpen: uploadFileIsOpen,
    onOpen: uploadFileOnOpen,
    onClose: uploadFileOnClose,
  } = useDisclosure();

  return (
    <Box className="flex flex-row gap-2 m-3 my-5">
      <Button colorScheme="blue" size="sm" onClick={createProductOnOpen}>
        Add
      </Button>
      <Modal
        title="Add new product"
        body={
          <form onSubmit={createProductHandleSubmit(onSubmitCreateProduct)}>
            <Box className="flex flex-col gap-4 text-zinc-500">
              <FormControl isRequired>
                <FormLabel>Code</FormLabel>
                <Input
                  id="code"
                  placeholder="CP020"
                  {...registerCreateProduct("code")}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Valve Control System"
                  {...registerCreateProduct("name")}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  id="price"
                  placeholder="199.99"
                  {...registerCreateProduct("price")}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Quantity</FormLabel>
                <NumberInput>
                  <NumberInputField
                    id="quantity"
                    {...registerCreateProduct("quantity")}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>

            <br />
            <Button onClick={createProductOnClose}>Cancel</Button>
            <Button
              onClick={createProductOnClose}
              type="submit"
              variant="ghost"
            >
              Confirm
            </Button>
          </form>
        }
        isOpen={createProductIsOpen}
        onClose={createProductOnClose}
      />

      <Button colorScheme="blue" size="sm" onClick={uploadFileOnOpen}>
        Upload file
      </Button>
      <Modal
        title="Upload file to bulk creation"
        body={
          <Box className="flex flex-col gap-4 text-zinc-500">
            <Text>Upload a CSV file to create multiple products from it.</Text>

            <form onSubmit={uploadFileHandleSubmit(onSubmitUploadFile)}>
              <Box>
                <input type="file" onChange={onChangeUploadFile} />
              </Box>

              <br />
              <Button onClick={uploadFileOnClose}>Cancel</Button>
              <Button onClick={uploadFileOnClose} type="submit" variant="ghost">
                Confirm
              </Button>
            </form>
          </Box>
        }
        isOpen={uploadFileIsOpen}
        onClose={uploadFileOnClose}
      />
    </Box>
  );
}
