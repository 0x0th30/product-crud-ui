import { Box, Button } from "@chakra-ui/react";
import CreateModal from "../Modal/CreateModal";
import UploadFileModal from "../Modal/UploadModal";

export interface ActionBarProps {
  createProductsModalSettings: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    setProducts: (products: any[] | ((products: any[]) => void)) => void;
  };
  uploadFileModalSettings: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    file: any;
    setFile: (file: any) => void;
  };
}

export default function ActionBar({
  createProductsModalSettings,
  uploadFileModalSettings,
}: ActionBarProps) {
  return (
    <Box className="flex flex-row gap-2 m-3 my-5">
      <Button
        colorScheme="blue"
        size="sm"
        onClick={createProductsModalSettings.onOpen}
      >
        Add
      </Button>
      <CreateModal
        isOpen={createProductsModalSettings.isOpen}
        onOpen={createProductsModalSettings.onOpen}
        onClose={createProductsModalSettings.onClose}
        setProducts={createProductsModalSettings.setProducts}
      />
      <Button
        colorScheme="blue"
        size="sm"
        onClick={uploadFileModalSettings.onOpen}
      >
        Upload file
      </Button>
      <UploadFileModal
        isOpen={uploadFileModalSettings.isOpen}
        onOpen={uploadFileModalSettings.onOpen}
        onClose={uploadFileModalSettings.onClose}
        file={uploadFileModalSettings.file}
        setFile={uploadFileModalSettings.setFile}
      />
    </Box>
  );
}
