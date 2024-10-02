import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001" });

export const listProducts = (search: string) =>
  axiosInstance.get(`/api/v1/products?page=1&limit=100&keyword=${search}`);

export const createProduct = (
  code: string,
  name: string,
  price: string,
  quantity: string
) =>
  axiosInstance.post("/api/v1/products", {
    code,
    title: name,
    price: Number(price),
  });

export const uploadFile = (file: any) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  const headers = { "content-type": "multipart/form-data" };
  return axiosInstance.post("/api/v1/products/bulk", formData, { headers });
};
