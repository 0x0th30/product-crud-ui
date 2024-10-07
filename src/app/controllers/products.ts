import { FieldValues } from "react-hook-form";
import * as httpClient from "../services/httpClient";
import {
  fromInputToProduct,
  fromInputToProductsRequest,
} from "../adapters/products";

function createProduct(data: FieldValues): Promise<Product> {
  const product = fromInputToProduct(data);

  return httpClient.createProduct(product);
}

function listProducts(
  index: number,
  limit: number,
  search: string
): Promise<ProductCollection> {
  const queryParameters = fromInputToProductsRequest(index, limit, search);

  return httpClient.listProducts(queryParameters);
}

function uploadFile(file: File) {
  return httpClient.uploadFile(file);
}

export const productsController = { createProduct, listProducts, uploadFile };
