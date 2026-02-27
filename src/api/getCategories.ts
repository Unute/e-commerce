import qs from "qs";
import { apiCategories } from "@/api/axiosInstance";
import type { ProductCategory } from "@/types/productCategory";

type CategoriesResponse = {
  data: ProductCategory[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export const getCategories = async (): Promise<ProductCategory[]> => {
  const query = qs.stringify({ pagination: { pageSize: 100 } });
  const response = await apiCategories.get<CategoriesResponse>(`?${query}`);
  return response.data.data;
};
