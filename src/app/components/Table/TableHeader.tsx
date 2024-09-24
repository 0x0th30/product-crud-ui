import { Box, Button } from "@chakra-ui/react";

export default function TableHeader() {
  return (
    <Box className="flex flex-row gap-2 m-3 my-5">
      <Button colorScheme="blue" size="sm">Add</Button>
      <Button colorScheme="blue" size="sm">Upload file</Button>
    </Box>
  )
}
