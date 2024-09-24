import { Box, Table as ChakraTable, Checkbox, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Table() {
  return (
    <Box>
      <TableContainer maxH="60vh" overflowY="auto">
        <ChakraTable size="sm">
          <Thead className="bg-zinc-50 border-b-2" position="sticky" top={0} zIndex="docked">
            <Tr>
              <Th className="w-1" py="12px">
                <Checkbox />
              </Th>
              <Th py="12px">Code</Th>
              <Th py="12px">Name</Th>
              <Th py="12px">Price</Th>
              <Th py="12px">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody className="font-semibold text-zinc-400 overflow-auto">
            <Tr className="transition duration-200 hover:bg-zinc-100 hover:delay-50">
              <Td py="12px">
                <Checkbox />
              </Td>
              <Td className="font-extrabold text-zinc-600" py="12px">CP001</Td>
              <Td py="12px">Engine Oil</Td>
              <Td py="12px">50.00</Td>
              <Td py="12px">2</Td>
            </Tr>
            <Tr className="transition duration-200 hover:bg-zinc-100 hover:delay-50">
              <Td py="12px">
                <Checkbox />
              </Td>
              <Td className="font-extrabold text-zinc-600" py="12px">CP002</Td>
              <Td py="12px">Brake Pads</Td>
              <Td py="12px">80.00</Td>
              <Td py="12px">10</Td>
            </Tr>
            <Tr className="transition duration-200 hover:bg-zinc-100 hover:delay-50">
              <Td py="12px">
                <Checkbox />
              </Td>
              <Td className="font-extrabold text-zinc-600" py="12px">CP003</Td>
              <Td py="12px">Air Filter</Td>
              <Td py="12px">200.00</Td>
              <Td py="12px">16</Td>
            </Tr>
            <Tr className="transition duration-200 hover:bg-zinc-100 hover:delay-50">
              <Td py="12px">
                <Checkbox />
              </Td>
              <Td className="font-extrabold text-zinc-600" py="12px">CP004</Td>
              <Td py="12px">Intake Kit</Td>
              <Td py="12px">500.00</Td>
              <Td py="12px">0</Td>
            </Tr>
            <Tr className="transition duration-200 hover:bg-zinc-100 hover:delay-50">
              <Td py="12px">
                <Checkbox />
              </Td>
              <Td className="font-extrabold text-zinc-600" py="12px">CP005</Td>
              <Td py="12px">Trasmission Fluid</Td>
              <Td py="12px">40.00</Td>
              <Td py="12px">3</Td>
            </Tr>
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box >
  )
}
