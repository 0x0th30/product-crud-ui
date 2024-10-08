"use client";

import { useState, useEffect, FormEvent } from "react";
import { Box } from "@chakra-ui/react";
import HeaderArea from "./Header/HeaderArea";
import ProductsArea from "./ProductsArea/ProductsArea";
import ActionBar from "./ProductsArea/ActionBar";
import Table from "./ProductsArea/Table";
import Header from "./Header/Header";
import { FieldValues } from "react-hook-form";
import { productsController } from "../controllers/products";

export default function App() {
  const [products, setProducts] = useState<ProductCollection>([]);
  const [search, setSearch] = useState<string>("");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    productsController
      .listProducts(1, 100, search)
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, [search]);

  const onSubmitCreateProduct = (data: FieldValues) => {
    productsController
      .createProduct(data)
      .then((createdProduct) =>
        setProducts((previousProducts) => [...previousProducts, createdProduct])
      )
      .catch((error) => console.log(error));
  };

  const onSubmitUploadFile = () => {
    if (!file) return;
    productsController.uploadFile(file);
  };

  const onChangeFile = (event: FormEvent) =>
    setFile((event.target as HTMLInputElement).files![0]);

  return (
    <Box className="flex flex-col min-h-screen">
      <HeaderArea>
        <Header setSearch={setSearch} />
      </HeaderArea>

      <div className="h-0.5 mx-2 rounded-xl border-b-2"></div>

      <ProductsArea>
        <ActionBar
          onSubmitCreateProduct={onSubmitCreateProduct}
          onSubmitUploadFile={onSubmitUploadFile}
          onChangeUploadFile={onChangeFile}
        />
        <Table data={products} />
      </ProductsArea>
      <Box className="bg-zinc-50 h-24 mb-0 border-t-2"></Box>
    </Box>
  );
}
