import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

export interface HeaderProps {
  setSearch: (keyword: string) => void;
}

export default function Header({ setSearch }: HeaderProps) {
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
        <Input
          placeholder="Search product"
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
