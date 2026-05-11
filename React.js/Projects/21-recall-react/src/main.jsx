import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { HomeComponent } from "./assets/Components/HomeComponent.jsx";
import { FromComponent } from "./assets/Components/FromComponent.jsx";
import { ProfileComponent } from "./assets/Components/ProfileComponent.jsx";
import { LoginForm } from "./assets/Components/LoginForm.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: '/',
        element: <HomeComponent />
      },
      {
        path: '/form',
        element: <FromComponent />
      },
      {
        path: '/profile',
        element: <ProfileComponent />
      },
      {
        path: '/login',
        element: <LoginForm />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router= {router} />
  </StrictMode>,
);
