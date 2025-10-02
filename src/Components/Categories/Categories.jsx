import React, { use } from "react";
import Category from "../Category/Category";

const Categories = ({ categoriesPromise }) => {
  const { categories } = use(categoriesPromise).data;
  console.log(categories);
  return (
    <div className="flex items-center gap-5 flex-wrap">
      {categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default Categories;
