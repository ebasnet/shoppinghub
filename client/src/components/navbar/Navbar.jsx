import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom"; // Correct import for Link
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = ({ setShowLogin, setShowInput }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;
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
        <Link to="/">
          <div className="navbar-center">
            <h1 className="navbar-logo">
              Shopping Hub <span>.</span>
            </h1>
          </div>
        </Link>
        <div className="navbar-right">
          {/* <Link to="/register">
            <div className="navbar-menuItem">Register</div>
          </Link> */}
          <div className="navbar-menuItem">
            <button onClick={() => setShowLogin(true)}>Sign-in</button>
          </div>

          <Link to="/cart">
            <div className="navbar-menuItem">
              <MdOutlineShoppingCart className="icon" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
