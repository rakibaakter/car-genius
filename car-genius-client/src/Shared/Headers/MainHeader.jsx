import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import OutlineButton from "../Buttons/OutlineButton";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthHook } from "../../providers/Hooks/useAuthHook";

const MainHeader = () => {
  const { user, logOut } = useAuthHook();

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user && (
        <li>
          <Link
            to="/orders
          "
          >
            Orders
          </Link>
        </li>
      )}
    </>
  );
  return (
    <nav className="lg:px-36 lg:py-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="car-doctor" className="w-full h-10 md:h-12" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <span className="flex md:gap-2 md:mr-4 text-xl">
            <AiOutlineShoppingCart />
            <AiOutlineSearch />
          </span>
          {/* <OutlineButton>Appointment</OutlineButton> */}
          {user ? (
            <div>
              <span className="mx-2">{user?.displayName}</span>
              <button onClick={logOut}>
                <OutlineButton>LogOut</OutlineButton>
              </button>
            </div>
          ) : (
            <Link to="/login">
              <OutlineButton>Log in</OutlineButton>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
