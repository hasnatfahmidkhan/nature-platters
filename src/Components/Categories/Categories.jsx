import Category from "../Category/Category";

const Categories = ({categories}) => {

  return (
    <ul className="flex items-center gap-5 flex-wrap">
      {categories.map((cat) => (
        <Category key={cat.id} cat={cat} />
      ))}
    </ul>
  );
};

export default Categories;
