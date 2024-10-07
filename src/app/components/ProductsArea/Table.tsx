import {
  Box,
  Table as ChakraTable,
  Checkbox,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export interface TableProps {
  data: ProductCollection;
}

export default function Table({ data }: TableProps) {
  return (
    <Box>
      <TableContainer maxH="60vh" overflowY="auto">
        <ChakraTable size="sm">
          <Thead
            className="bg-zinc-50 border-b-2"
            position="sticky"
            top={0}
            zIndex="docked"
          >
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
            {data.map((element) => (
              <Tr
                key={element.code}
                className="transition duration-200 hover:bg-zinc-100 hover:delay-50"
              >
                <Td py="12px">
                  <Checkbox />
                </Td>
                <Td className="font-extrabold text-zinc-600" py="12px">
                  {element.code}
                </Td>
                <Td py="12px">{element.name || element.title}</Td>
                <Td py="12px">{element.price}</Td>
                <Td py="12px">{element.quantity}</Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
}
