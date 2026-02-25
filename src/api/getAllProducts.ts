import qs from "qs";

import { api } from "@/api/axiosInstance";
import type { ProductsResponse } from "@/types/product";

export const getAllProducts = async (): Promise<ProductsResponse> => {
  const query = qs.stringify({
    populate: ["images", "productCategory"],
    pagination: { pageSize: 100 },
  });

  const response = await api.get<ProductsResponse>(`?${query}`);
  return response.data;
};
