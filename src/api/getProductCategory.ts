import qs from "qs";

import { api } from "@/api/axiosInstance";
import type { ProductsResponse } from "@/types/product";

export const getProductsByCategory = async (
  productCategoryDocumentId: string | null,
): Promise<ProductsResponse> => {
  const query = qs.stringify({
    populate: ["images", "productCategory"],
    ...(productCategoryDocumentId && {
      filters: {
        productCategory: { documentId: { $eq: productCategoryDocumentId } },
      },
    }),
  });
  const response = await api.get<ProductsResponse>(`?${query}`);
  return response.data;
};
