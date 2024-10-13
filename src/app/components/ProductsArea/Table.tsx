import {
  Box,
  Button,
  Table as ChakraTable,
  Checkbox,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export interface TableProps {
  data: ProductCollection;
  handleDelete: (codes: string[]) => void;
}

export default function Table({ data, handleDelete }: TableProps) {
  const [selectedProducts, setSelectedProducts] = useState<ProductCollection>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const isProductSelectedByCode = (code: string) => {
    return selectedProducts.filter((product => product.code === code)).length > 0;
  }

  const isAllChecked = selectedProducts.length === data.length && data.length > 0;

  const onCheckAll = (allChecked: boolean) => {
    setAllChecked(allChecked);
    if (allChecked) setSelectedProducts(data);
    else setSelectedProducts([]);
  }

  const onCheckProduct = (isChecked: boolean, product: Product) => {
    if (isChecked) setSelectedProducts((previous) => [...previous, product])
    else setSelectedProducts((previous) => previous.filter((e) => e.code !== product.code));

    if (allChecked && !isChecked) setAllChecked(false)
  }

  useEffect(() => {
    console.log(allChecked)
    console.log(selectedProducts);
  }, [allChecked, selectedProducts])

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
                <Checkbox isChecked={isAllChecked} onChange={(e) => onCheckAll(e.target.checked)} />
              </Th>
              <Th py="12px">Code</Th>
              <Th py="12px">Name</Th>
              <Th py="12px">Price</Th>
              <Th py="12px">Quantity</Th>
              <Th className="w-1" py="12px">
                <Button variant="link" onClick={() => handleDelete(selectedProducts.map((product) => product.code))}>
                  <DeleteIcon />
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody className="font-semibold text-zinc-400 overflow-auto">
            {data.map((element) => (
              <Tr
                key={element.code}
                className="transition duration-200 hover:bg-zinc-100 hover:delay-50"
              >
                <Td py="12px">
                  <Checkbox isChecked={isProductSelectedByCode(element.code)} onChange={(e) => onCheckProduct(e.target.checked, element)} />
                </Td>
                <Td className="font-extrabold text-zinc-600" py="12px">
                  {element.code}
                </Td>
                <Td py="12px">{element.name}</Td>
                <Td py="12px">{element.price}</Td>
                <Td py="12px">{element.quantity}</Td>
                <Td className="w-1" py="12px">
                  <Button variant="link" onClick={() => handleDelete([element.code])}>
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
}
