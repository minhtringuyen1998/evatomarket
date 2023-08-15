import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ShopPage from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);
export default router;
