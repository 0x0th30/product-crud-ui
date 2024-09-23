import { SearchIcon } from "@chakra-ui/icons";
import { Box, Text, InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box className="flex flex-row justify-between items-center">
      <Box className="flex flex-row gap-6">
        <Text fontSize="md"> Products: 5 </Text>
        <Text fontSize="md"> Empty stock: 1 </Text>
      </Box>
      <InputGroup size="md" maxWidth="50%">
        <Input placeholder="Search product" />
        <InputRightElement>
          <IconButton
            aria-label="Search product"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}
