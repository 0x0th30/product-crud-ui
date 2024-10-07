import { FieldValues } from "react-hook-form";

export function fromInputToProduct(data: FieldValues): Product {
  return {
    code: data.code,
    // name: data.name,
    title: data.name,
    price: Number(data.price),
    quantity: Number(data.quantity) || 0,
  };
}

export function fromInputToProductsRequest(
  page: number,
  limit: number,
  search: string
): ProductsRequest {
  return {
    page,
    limit,
    keyword: search && search.length > 0 ? search : undefined,
    // search: search && search.length > 0 ? search : undefined,
  };
}
