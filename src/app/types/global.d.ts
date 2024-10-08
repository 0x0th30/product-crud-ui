export {};

declare global {
  type Product = {
    code: string;
    name: string;
    price: number;
    quantity: number;
  };

  type ProductCollection = Array<Product>;

  type ProductsRequest = {
    page: number;
    limit: number;
    keyword?: string;
  };

  type UploadFileResponse = {
    taskId: string;
    enqueuedProducts: number;
  };
}
