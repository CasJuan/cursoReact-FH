import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import AboutPage from "../pages/about/AboutPage";
import ProfilePage from "../pages/profile/ProfilePage";
import { LoginPages } from "../pages/auth/LoginPages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
  {
    path: "/login",
    element: <LoginPages/>,
  },
  {
    path: "#",
    element: <Navigate to="/" />,
  },
]);
