import qs from "qs";

import { api } from "@/api/axiosInstance";
import type { Product } from "@/types/product";

type ProductByIdResponse = {
  data: Product;
};

export const getProductById = async (documentId: string): Promise<Product> => {
  const query = qs.stringify({ populate: ["images", "productCategory"] });
  const response = await api.get<ProductByIdResponse>(
    `/${documentId}?${query}`,
  );
  return response.data.data;
};
