import { Menu, Search, ShoppingCart } from "lucide-react";
import mobileLogo from "/mobile-logo.png";
import logo from "/logo-green.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="py-2 bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar 2xl:w-10/12 mx-auto">
        <div className="navbar-start">
          <a>
            <img
              className="hidden md:inline-block w-2/3 md:w-full object-cover px-2 md:px-0"
              src={logo}
              alt=""
            />
            <img
              className="inline-block md:hidden px-2 md:px-0"
              src={mobileLogo}
              alt=""
            />
          </a>
        </div>
        {/* desktop menu  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8 text-xl ">
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/foods">Foods</a>
            </li>
            <li>
              <a to="/services">Services</a>
            </li>
            <li>
              <a to="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {/* search icon  */}
              <div>
                <Search />
              </div>
              {/* Cart icon  */}
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <ShoppingCart />
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu  */}
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text"
            >
              <li>
                <a to="/">Home</a>
              </li>
              <li>
                <a to="/foods">Foods</a>
              </li>
              <li>
                <a to="/services">Services</a>
              </li>
              <li>
                <a to="/contact">Contact Us</a>
              </li>
              <li>
                <a to="/login">Login</a>
              </li>
              <li>
                <a to="/registratin">Registration</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
