import { Menu, Search, ShoppingCart } from "lucide-react";
import mobileLogo from "/mobile-logo.png";
import logo from "/logo-green.png";
import "./navbar.css";
import { Link, NavLink } from "react-router";
import { use } from "react";
import { CartContext } from "../../Provider/CartContext/CartContext";
const Navbar = () => {
  const { cart } = use(CartContext);

  return (
    <nav className="py-2 bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar md:w-11/12 2xl:w-10/12 mx-auto">
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Foods</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
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
              <Link to="/cart">
                <div
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <ShoppingCart />
                    <span className="badge badge-sm indicator-item">
                      {cart.length}
                    </span>
                  </div>
                </div>
              </Link>
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/foods">Foods</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
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
