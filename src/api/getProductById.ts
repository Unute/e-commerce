import qs from "qs";

import { apiProducts } from "@/api/axiosInstance";
import type { Product } from "@/types/product";

type ProductByIdResponse = {
  data: Product;
};

export const getProductById = async (documentId: string): Promise<Product> => {
  const query = qs.stringify({ populate: ["images", "productCategory"] });
  const response = await apiProducts.get<ProductByIdResponse>(
    `/${documentId}?${query}`,
  );
  return response.data.data;
};
