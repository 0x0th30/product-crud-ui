import { SearchIcon } from "@chakra-ui/icons";
import { Box, Text, InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box className="flex flex-row justify-between items-center">
      <Box className="flex flex-row gap-3">
        <Text className="font-md text-zinc-400">
          Products: <span className="font-bold text-zinc-600">5</span>
        </Text>
        <Text className="font-md text-zinc-400">
          No stock: <span className="font-extrabold text-zinc-600">1</span>
        </Text>
      </Box>
      <InputGroup size="md" maxWidth="50%">
        <Input placeholder="Search product" />
        <InputRightElement>
          <IconButton
            bg="transparent"
            aria-label="Search product"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}
