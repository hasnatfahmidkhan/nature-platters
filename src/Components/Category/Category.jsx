import { NavLink } from "react-router";
import "./category.css";
const Category = ({ cat }) => {
  return (
    <li className="category">
      <NavLink
        to={`/foods/${cat.id}`}
        className="border border-green-700 bg-transparent px-4 rounded-full cursor-pointer btn hover:bg-green-700 hover:text-white"
      >
        {cat.categoryName}
      </NavLink>
    </li>
  );
};

export default Category;
