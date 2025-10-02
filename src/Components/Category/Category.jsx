import { NavLink } from "react-router";
import "./category.css";
const Category = ({ cat }) => {
  return (
    <li className="category">
      <NavLink
        to={`/foods/${cat.id}`}
        className="border border-green-600 px-4 rounded-full cursor-pointer btn"
      >
        {cat.categoryName}
      </NavLink>
    </li>
  );
};

export default Category;
