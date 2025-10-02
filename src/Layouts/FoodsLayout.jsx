import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";
import Categories from "../Components/Categories/Categories.jsx";
import axios from "axios";
import PageTitle from "../Components/PageTitle/PageTitle.jsx";
const categoriesPromise = axios.get(
  "https://taxi-kitchen-api.vercel.app/api/v1/categories"
);

const FoodsLayout = () => {
  return (
    <Container>
      <PageTitle title={"Foods Page"} />
      <Suspense>
        <Categories categoriesPromise={categoriesPromise} />
      </Suspense>
      <Outlet />
    </Container>
  );
};

export default FoodsLayout;
