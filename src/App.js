import Carousel from "./components/carousel/carousel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./components/base/base.components";
import React from "react";
import Home from "./components/home/home.component";
import Login from "./components/login/login.component";
import Cart from "./components/cart/cart.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "product",
            element: <h1>This is product</h1>,
          },
          {
            path: "catalog",
            element: <h1>This is catalog</h1>,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
