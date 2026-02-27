import type { RouteObject } from "react-router-dom";

import App from "@/App";
import AllProductPage from "@/components/pages/AllProductPage";
import ProductPage from "@/components/pages/ProductPage/ProductPage";
import Cart from "@/components/pages/Cart";
import Categories from "@/components/pages/Categories/Categories";
import AboutUs from "@/components/pages/AboutUs";

const ErrorBoundary = () => <div>Произошла ошибка приложения</div>;

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <AllProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "product/:documentId",
        element: <ProductPage />,
      },
    ],
  },
];
