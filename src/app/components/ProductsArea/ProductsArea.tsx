import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface ProductsAreaProps {
  children: ReactElement | ReactElement[];
}

export default function ProductsArea({ children }: ProductsAreaProps) {
  return <Box className="flex-grow">{children}</Box>;
}
