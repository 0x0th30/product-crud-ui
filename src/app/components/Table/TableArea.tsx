import { Box } from "@chakra-ui/react";
import Table from "./Table";
import TableHeader from "./TableHeader";

export default function TableArea() {
  return (
    <Box className="flex-grow">
      <TableHeader />
      <Table />
    </Box>
  )
}
