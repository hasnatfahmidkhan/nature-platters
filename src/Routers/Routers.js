import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Foods from "../Pages/Foods/Foods";
import Services from "../Pages/Services/Services";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/foods",
        Component: Foods,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
