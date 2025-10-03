import React, { use } from "react";
import Container from "../Container/Container";
import { Minus, Plus, X } from "lucide-react";
import { CartContext } from "../../Provider/CartContext/CartContext";

const Cart = () => {
  const {
    cart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveCart,
  } = use(CartContext);

  return (
    <Container>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center col-span-full text-2xl">
          No Cart Added
        </div>
      ) : (
        <section className="max-w-1/2 mx-auto grid md:grid-cols-2 gap-6 py-8">
          {cart.map((food) => (
            <div
              key={food.id}
              className="p-1 bg-white flex gap-3 shadow rounded-xl relative py-2"
            >
              <div className="img">
                <img
                  src={food.foodImg}
                  alt=""
                  className="w-[50px] rounded-xl h-[50px] object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h1 className="text-sm font-bold">{food.title}</h1>
                <div className="flex justify-between items-center pr-2">
                  <div className="space-y-1">
                    <h2 className="text-yellow-600 font-semibold">
                      $ <span className="price">{food.price}</span> BDT
                    </h2>
                    <div className="flex gap-4 pl-0.5">
                      <div
                        onClick={() => handleDecreaseQuantity(food)}
                        className="w-5 h-5 flex justify-center items-center cursor-pointer active:scale-95 bg-red-500 rounded-full text-white"
                      >
                        <Minus />
                      </div>

                      <div
                        onClick={() => handleIncreaseQuantity(food)}
                        className="w-5 h-5 flex justify-center items-center cursor-pointer active:scale-95 bg-green-500 rounded-full text-white"
                      >
                        <Plus />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Quantity: {food.quantity}
                  </p>
                </div>
              </div>
              <div
                onClick={() => handleRemoveCart(food.id)}
                className="w-6 h-6 flex justify-center items-center cursor-pointer active:scale-95 bg-red-500 rounded-full absolute -top-1 -right-1 text-white"
              >
                <X />
              </div>
            </div>
          ))}
        </section>
      )}
    </Container>
  );
};

export default Cart;
