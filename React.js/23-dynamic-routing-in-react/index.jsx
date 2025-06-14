import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";
import ErrorPage from "./components/ErrorPage"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import CountryDetail from "./components/countryDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
        errorElement: <ErrorPage />,
        children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],

  },
  
]);


const appendChild = createRoot(document.getElementById("root"))

appendChild.render( <RouterProvider router={router} />)