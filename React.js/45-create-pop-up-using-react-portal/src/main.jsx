import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./Components/HomePage.jsx"
import AboutUs from "./Components/AboutUs.jsx"
import ContactUs from "./Components/ContactUs.jsx"
import Error from "./Components/Error.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
