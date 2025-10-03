import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";
import { useState } from "react";
import { CartContext } from "../Provider/CartContext/CartContext";

const RootLayout = () => {
  const navigation = useNavigation();
  // Show spinner for ALL navlink clicks (root-level navigation)
  // but NOT when clicking inside foods categories
  const isNavLinkClick =
    navigation.state === "loading" &&
    !navigation.location?.pathname.startsWith("/foods/");

  const [cart, setCart] = useState([]);
  const handleCart = (food) => {
    const isExitsFood = cart.find((elem) => elem.id === food.id);

    if (isExitsFood) {
      const updatedCart = cart.map((elem) => {
        return elem.id === food.id
          ? { ...elem, quantity: elem.quantity + 1 }
          : elem;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...food, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (food) => {
    handleCart(food);
  };

  const handleDecreaseQuantity = (food) => {
    const filteredCartItem = cart
      .map((elem) => {
        return elem.id === food.id
          ? {
              ...elem,
              quantity: elem.quantity - 1,
            }
          : elem;
      })
      .filter((item) => item.quantity > 0);

    setCart(filteredCartItem);
  };

  const handleRemoveCart = (id) => {
    const filteredCart = cart.filter((elem) => elem.id !== id);
    setCart(filteredCart);
  };

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveCart,
        totalPrice,
      }}
    >
      <Navbar />
      {isNavLinkClick ? (
        <SpinnerCircle />
      ) : (
        <main className="min-h-[calc(100vh-330px)]">
          <Outlet />
        </main>
      )}
      <Footer />
    </CartContext.Provider>
  );
};

export default RootLayout;
