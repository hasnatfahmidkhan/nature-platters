import { NavLink } from "react-router";

const Category = ({ cat }) => {
  return (
    <NavLink
      to={`foods/${cat.id}`}
      className="border border-green-600 px-4 rounded-full cursor-pointer btn"
    >
      {cat.categoryName}
    </NavLink>
  );
};

export default Category;
