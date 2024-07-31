import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page";
import MainLayout from "@/components/layout";
import AboutPage from "./about/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
