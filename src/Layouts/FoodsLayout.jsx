import { Outlet, useLoaderData } from "react-router";
import Container from "../Components/Container/Container";
import Categories from "../Components/Categories/Categories.jsx";
import PageTitle from "../Components/PageTitle/PageTitle.jsx";

const FoodsLayout = () => {
  const { categories } = useLoaderData();
  return (
    <Container>
      <PageTitle title={"Foods Page"} />
      <Categories categories={categories} />
      <Outlet />
    </Container>
  );
};

export default FoodsLayout;
