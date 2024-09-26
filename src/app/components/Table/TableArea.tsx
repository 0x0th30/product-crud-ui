import { Box } from "@chakra-ui/react";
import Table from "./Table";
import TableHeader from "./TableHeader";

export default function TableArea() {
  const tableData = [
    { code: "CP001", name: "Engine Oil", price: "50.00", quantity: "2" },
    { code: "CP002", name: "Brake Pads", price: "80.00", quantity: "10" },
    { code: "CP003", name: "Air Filter", price: "200.00", quantity: "16" },
    { code: "CP004", name: "Intake Kit", price: "500.00", quantity: "0" },
    { code: "CP005", name: "Transmission", price: "40.00", quantity: "3" },
  ];

  return (
    <Box className="flex-grow">
      <TableHeader />
      <Table data={tableData} />
    </Box>
  );
}
