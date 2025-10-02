import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SpinnerCircle from "../Components/SpinnerCircle/SpinnerCircle";

const RootLayout = () => {
  const navigation = useNavigation();
  // Show spinner for ALL navlink clicks (root-level navigation)
  // but NOT when clicking inside foods categories
  const isNavLinkClick =
    navigation.state === "loading" &&
    !navigation.location?.pathname.startsWith("/foods/");
  return (
    <>
      <Navbar />
      {isNavLinkClick ? (
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
