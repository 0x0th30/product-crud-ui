import { Box, Button } from "@chakra-ui/react";

export default function TableHeader() {
  return (
    <Box className="flex flex-row gap-2 m-3">
      <Button>Add</Button>
      <Button>Upload file</Button>
    </Box>
  )
}
