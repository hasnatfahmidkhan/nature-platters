import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import axios from "axios";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";
import Cart from "../Components/Cart/Cart";
import FoodsLayout from "../Layouts/FoodsLayout";
import RandomFoods from "../Pages/RandomFoods/RandomFoods";
import FoodByCategory from "../Pages/FoodByCategory/FoodByCategory";
export const Router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback: SpinnerCircle,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/foods",
        Component: FoodsLayout,
        loader: async () => {
          const res = await axios.get(
            "https://taxi-kitchen-api.vercel.app/api/v1/categories"
          );
          return { categories: res.data.categories };
        },
        children: [
          {
            index: true,
            Component: RandomFoods,

            loader: async () => {
              const res = await axios.get(
                "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
              );
              return { foods: res.data.foods };
            },
          },
          {
            path: "/foods/:foodId",
            loader: async ({ params }) => {
              const res = await axios.get(
                `https://taxi-kitchen-api.vercel.app/api/v1/categories/${params.foodId}`
              );
              return { foods: res?.data?.foods };
            },
            Component: FoodByCategory,
          },
        ],
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
