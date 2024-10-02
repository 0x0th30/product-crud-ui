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
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listProducts(search).then((response) =>
      setProducts(response.data.data.products),
    );
  }, [search]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="flex flex-col min-h-screen">
      <HeaderArea>
        <Header setSearch={setSearch} />
      </HeaderArea>

      <div className="h-0.5 mx-2 my-5 rounded-xl border-b-2"></div>

      <ProductsArea>
        <ActionBar
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setProducts={setProducts}
        />
        <Table data={products} />
      </ProductsArea>
      <Box className="bg-zinc-50 h-24 mb-0 border-t-2"></Box>
    </Box>
  );
}
