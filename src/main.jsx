import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./compones/pages/Home";
import Pages_to_Read from "./compones/pages/Pages_to_Read";
import Root from "./compones/Root/Root";
import BookDetails from "./compones/pages/BookDetails";
import Listed_Books from "./compones/pages/Listed_Books";
import Bookmark from "./compones/pages/Bookmark";
import Wishlist from "./compones/pages/Wishlist";
import { Toaster } from 'react-hot-toast';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/api.json"),

      },
      {
        path: "/Pages_to_Read",
        element: <Pages_to_Read></Pages_to_Read>,
      },
      {
        path: "/Listed_Books",
        element: <Listed_Books></Listed_Books>,
        children: [
          {
            path: "bookmark",
            loader: () => fetch("/api.json"),
            element: <Bookmark></Bookmark>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  </React.StrictMode>

);