import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export interface HeaderAreaProps {
  children: ReactElement | ReactElement[];
}

export default function HeaderArea({ children }: HeaderAreaProps) {
  return <Box className="p-3 my-3">{children}</Box>;
}
