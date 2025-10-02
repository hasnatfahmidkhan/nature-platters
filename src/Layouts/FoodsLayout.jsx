import { Outlet, useLoaderData, useNavigation } from "react-router";
import Container from "../Components/Container/Container";
import Categories from "../Components/Categories/Categories.jsx";
import PageTitle from "../Components/PageTitle/PageTitle.jsx";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle.jsx";

const FoodsLayout = () => {
  const { categories } = useLoaderData();
  const navigation = useNavigation();
  const isCategoryClick =
    navigation.state === "loading" &&
    navigation.location?.pathname.startsWith("/foods/");

  return (
    <Container>
      <PageTitle title={"Foods Page"} />
      <Categories categories={categories} />
      {isCategoryClick ? <SpinnerCircle /> : <Outlet />}
    </Container>
  );
};

export default FoodsLayout;
