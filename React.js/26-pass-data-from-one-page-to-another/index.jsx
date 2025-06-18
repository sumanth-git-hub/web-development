import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";
import CountryCardShimmer from "./components/CountryCardShimmer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
        errorElement: <Error />,

    children: [
      {
    path: "/",
    element: <HomePage />,
  },
      {
    path: "/contact",
    element: <Contact />,
  },
      {
    path: "/:country",
    element: <CountryDetail />,
  },
      {
    path: "/shimmer-card",
    element: <CountryCardShimmer />
  },
    ],
  },
]);

const appendChild = createRoot(document.getElementById("root"));
appendChild.render(<RouterProvider router={router} />);
