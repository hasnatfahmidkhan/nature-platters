import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";
import { useState } from "react";
import { CartContext } from "../Provider/CartContext/CartContext";
import { ToastContainer } from "react-toastify";
import {
  CustomToastError,
  CustomToastSuccess,
} from "../Components/Toast/CustomToast";

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
    CustomToastSuccess("Food added to the cart");
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
    CustomToastError("Item remove from the cart");
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
      <ToastContainer />
    </CartContext.Provider>
  );
};

export default RootLayout;
