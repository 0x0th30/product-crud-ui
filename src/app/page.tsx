"use client";

import { Box } from "@chakra-ui/react";
import HeaderArea from "./components/Header/HeaderArea";
import TableArea from "./components/Table/TableArea";

export default function Home() {
  return (
    <Box className="flex flex-col min-h-screen">
      <HeaderArea />
      <div className="h-0.5 mx-2 my-5 rounded-xl border-b-2"></div>
      <TableArea />
      <Box className="bg-zinc-50 h-24 mb-0 border-t-2"></Box>
    </Box>
  );
}
