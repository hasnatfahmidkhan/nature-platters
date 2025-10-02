import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? (
        <SpinnerCircle />
      ) : (
        <main className="min-h-[calc(100vh-330px)]">
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
};

export default RootLayout;
