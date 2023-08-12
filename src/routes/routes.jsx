import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../layouts/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
