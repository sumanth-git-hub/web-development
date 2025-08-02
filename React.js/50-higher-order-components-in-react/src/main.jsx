import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import HomePage from "./Components/HomePage.jsx";

import Error from "./Components/Error.jsx";

//importing with lazy load when the component is named export
// const ContactUs = lazy(() => waitForResponse(1000).then(() => import('./Components/ContactUs').then(module => {
//   return {default: module.ContactUs}
// })))

const ContactUs = lazy(() =>
  waitForResponse(1000).then(() => import("./Components/ContactUs.jsx"))
);
const AboutUs = lazy(() =>
  waitForResponse(1000).then(() => import("./Components/AboutUs.jsx"))
);

// const fallBackElement = (PassComponent) => {
//   return <Suspense fallback={<h3 className="text-2xl font-bold text-center">Loading...</h3>}>
//     <PassComponent />
//   </Suspense>
// }

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
        path: "/about-us",
        element: <Suspense fallback={<p>Loading......</p>}>
          <AboutUs/>
        </Suspense>
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

// for the sake of increasing the load time i have written this promise
const waitForResponse = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
