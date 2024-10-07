import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:3001/api/v1" });

export const listProducts = (
  params: ProductsRequest
): Promise<ProductCollection> => {
  const path = "/products";

  return axiosInstance.get(path, { params }).then((response) => {
    if (response.status === 200) return response.data.data.products;
    throw new Error();
  });
};

export const createProduct = (product: Product): Promise<Product> => {
  const path = "/products";

  return axiosInstance.post(path, product).then((response) => {
    if (response.status === 201) return response.data.data.product;
    throw new Error();
  });
};

export const uploadFile = (file: File): Promise<UploadFileResponse> => {
  const path = "/products/bulk";
  const headers = { "content-type": "multipart/form-data" };
  const formData = new FormData();

  formData.append("file", file);
  formData.append("fileName", file.name);

  return axiosInstance.post(path, formData, { headers }).then((response) => {
    if (response.status === 202) return response.data.data;
    throw new Error();
  });
};
