import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
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
          <div className="navbar-menuItem">Register</div>
          <div className="navbar-menuItem">Login</div>
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
