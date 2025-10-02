import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import axios from "axios";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";
import Cart from "../Components/Cart/Cart";
import FoodsLayout from "../Layouts/FoodsLayout";
import Foods from "../Pages/Foods/Foods";

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
        Component: FoodsLayout,
        
        // HydrateFallback: SpinnerCircle,
        // loader: async () => {
        //   const [foodsRes, categoriesRes] = await Promise.all([
        //     axios.get(
        //       "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
        //     ),
        //     axios.get(" https://taxi-kitchen-api.vercel.app/api/v1/categories"),
        //   ]);
        //   return {
        //     foods: foodsRes?.data?.foods,
        //     categories: categoriesRes?.data?.categories,
        //   };
        // },
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
]);
