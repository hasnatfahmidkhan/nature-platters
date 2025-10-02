import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div id="${tree.id}" className="card p-4 bg-white h-fit shadow-sm ">
      <figure className="h-40 rounded-xl">
        <img src={`${food.foodImg}`} alt="" loading="lazy" />
      </figure>
      <div className="overflow-clip space-y-4">
        <div className="space-y-3">
          <h2 className="card-title mt-3 inline-block">{food.title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="badge bg-green-200 text-[#15803D] font-medium">
            {food.category}
          </div>
          <p className="font-medium text-[#1F2937]">
            $<span className="price">{food.price}</span>
          </p>
        </div>
        <div className="card-actions justify-end mt-3">
          <button className="btn bg-[#15803D] hover:bg-[#127737] text-white w-full rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
