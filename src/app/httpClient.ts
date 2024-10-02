import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001" });

export const listProducts = (search: string) =>
  axiosInstance.get(`/api/v1/products?page=1&limit=100&keyword=${search}`);

export const createProduct = (
  code: string,
  name: string,
  price: string,
  quantity: string,
) =>
  axiosInstance.post("/api/v1/products", {
    code,
    title: name,
    price: Number(price),
  });
