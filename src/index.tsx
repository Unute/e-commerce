import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routesConfig } from "./config/routes.tsx";
import { RootStoreProvider } from "./stores/context.tsx";

const router = createBrowserRouter(routesConfig);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RootStoreProvider>
        <RouterProvider router={router} />
      </RootStoreProvider>
    </StrictMode>,
  );
}
