"use client"

import { Box, Divider } from "@chakra-ui/react";
import HeaderArea from "./components/Header/HeaderArea";
import TableArea from "./components/Table/TableArea";

export default function Home() {
  return (
    <Box className="overflow-hidden">
      <HeaderArea />
      <Divider className="m-4" borderWidth="2px" borderRadius="1px" />
      <TableArea />
    </Box>
  );
}
