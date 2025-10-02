import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-330px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
