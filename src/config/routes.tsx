import type { RouteObject } from "react-router-dom";

import App from "@/App";
import AllProductPage from "@/components/pages/AllProductPage";
import ProductPage from "@/components/pages/ProductPage/ProductPage";
import Cart from "@/components/pages/Cart";

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
        path: "product/:documentId",
        element: <ProductPage />,
      },
    ],
  },
];
