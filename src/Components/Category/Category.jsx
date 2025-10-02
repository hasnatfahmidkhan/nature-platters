import { Link } from "react-router";

const Category = ({ cat }) => {
  return (
    <Link className="border border-green-600 px-4 rounded-full cursor-pointer btn">
      {cat.categoryName}
    </Link>
  );
};

export default Category;
