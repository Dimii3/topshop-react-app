import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/theme.css";
import "./styles/globals.css";
import MainPage from "./views/MainPage/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
