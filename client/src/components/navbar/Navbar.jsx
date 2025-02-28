import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom"; // Correct import for Link

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-searchContainer">
            <input type="text" placeholder="search" className="navbar-input" />
            <IoSearch className="icon" />
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-logo">
            Shopping Hub <span>.</span>
          </h1>
        </div>
        <div className="navbar-right">
          <Link to="/register">
            <div className="navbar-menuItem">Register</div>
          </Link>

          <Link to="/login">
            <div className="navbar-menuItem">Login</div>
          </Link>

          <div className="navbar-menuItem">
            <MdOutlineShoppingCart className="icon" />
            <span className="cart-badge"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
