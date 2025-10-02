import { useLoaderData } from "react-router";
import FoodCard from "../../Components/FoodCard/FoodCard";

const Foods = () => {
  const { foods } = useLoaderData();

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 py-8">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </section>
  );
};

export default Foods;
