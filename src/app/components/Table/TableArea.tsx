import { Text, Box } from "@chakra-ui/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import { listProducts } from "@/app/httpClient";
import { useEffect, useState } from "react";

export default function TableArea() {
  /*const tableData = [
    { code: "CP001", name: "Engine Oil", price: "50.00", quantity: "2" },
    { code: "CP002", name: "Brake Pads", price: "80.00", quantity: "10" },
    { code: "CP003", name: "Air Filter", price: "200.00", quantity: "16" },
    { code: "CP004", name: "Intake Kit", price: "500.00", quantity: "0" },
    { code: "CP005", name: "Transmission", price: "40.00", quantity: "3" },
  ];*/

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    listProducts().then((data) => {
      console.log(data.data.data.products);
      return setTableData(data.data.data.products);
    });
  }, []);

  if (!tableData) return <Text>No data</Text>;

  return (
    <Box className="flex-grow">
      <TableHeader />
      <Table data={tableData} />
    </Box>
  );
}
