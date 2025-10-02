import { useLoaderData } from "react-router";
import Container from "../../Components/Container/Container";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Category from "../../Components/Category/Category";

const Foods = () => {
  const { foods, categories } = useLoaderData();
  console.log(categories);
  return (
    <Container>
      {/* <h2 className="text-center text-2xl font-bold underline text-green-600 mooli-font">
        Our Foods
      </h2> */}
      <section>
        <ul className="flex items-center gap-5 flex-wrap">
          {categories.map((cat) => (
            <Category key={cat.id} cat={cat} />
          ))}
        </ul>
      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 py-8">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </section>
    </Container>
  );
};

export default Foods;
