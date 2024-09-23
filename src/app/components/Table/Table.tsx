import { Box, Button, Table as ChakraTable, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Table() {
  return (
    <Box className="m-3">
      <ChakraTable>
        <Thead>
          <Tr>
            <Th>Code</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>CP001</Td>
            <Td>Engine Oil</Td>
            <Td>50.00</Td>
            <Td>2</Td>
          </Tr>
          <Tr>
            <Td>CP002</Td>
            <Td>Brake Pads</Td>
            <Td>80.00</Td>
            <Td>10</Td>
          </Tr>
          <Tr>
            <Td>CP003</Td>
            <Td>Air Filter</Td>
            <Td>150.00</Td>
            <Td>16</Td>
          </Tr>
          <Tr>
            <Td>CP004</Td>
            <Td>Intake Kit</Td>
            <Td>500.00</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>CP005</Td>
            <Td>Trasmission Fluid</Td>
            <Td>40.00</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </Box >
  )
}
