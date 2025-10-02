import { useLoaderData } from "react-router";
import Container from "../../Components/Container/Container";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Foods = () => {
  const { foods, categories } = useLoaderData();
  return (
    <Container>
      <h2 className="text-center text-2xl font-bold underline text-green-600 mooli-font">
        Our Foods
      </h2>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 py-8">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </section>
    </Container>
  );
};

export default Foods;
