"use client";

import { useState, useEffect } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import HeaderArea from "./components/Header/HeaderArea";
import ProductsArea from "./components/ProductsArea/ProductsArea";
import { listProducts } from "./httpClient";
import ActionBar from "./components/ProductsArea/ActionBar";
import Table from "./components/ProductsArea/Table";
import Header from "./components/Header/Header";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [file, setFile] = useState(undefined);

  useEffect(() => {
    listProducts(search).then((response) =>
      setProducts(response.data.data.products)
    );
  }, [search]);

  const {
    isOpen: createProductsIsOpen,
    onOpen: createProductsOnOpen,
    onClose: createProductsOnClose,
  } = useDisclosure();

  const {
    isOpen: uploadFileIsOpen,
    onOpen: uploadFileOnOpen,
    onClose: uploadFileOnClose,
  } = useDisclosure();

  return (
    <Box className="flex flex-col min-h-screen">
      <HeaderArea>
        <Header setSearch={setSearch} />
      </HeaderArea>

      <div className="h-0.5 mx-2 my-5 rounded-xl border-b-2"></div>

      <ProductsArea>
        <ActionBar
          createProductsModalSettings={{
            isOpen: createProductsIsOpen,
            onOpen: createProductsOnOpen,
            onClose: createProductsOnClose,
            setProducts: setProducts as any,
          }}
          uploadFileModalSettings={{
            isOpen: uploadFileIsOpen,
            onOpen: uploadFileOnOpen,
            onClose: uploadFileOnClose,
            file,
            setFile,
          }}
        />
        <Table data={products} />
      </ProductsArea>
      <Box className="bg-zinc-50 h-24 mb-0 border-t-2"></Box>
    </Box>
  );
}
