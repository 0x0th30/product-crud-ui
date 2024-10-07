import { SearchIcon } from "@chakra-ui/icons";
import { Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import Counter from "./Counter";

export interface HeaderProps {
  setSearch: (keyword: string) => void;
}

export default function Header({ setSearch }: HeaderProps) {
  return (
    <Box className="flex flex-row justify-between items-center">
      <Box className="flex flex-row gap-3">
        <Counter label="Products:" value={5} />
        <Counter label="No stock:" value={5} />
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
