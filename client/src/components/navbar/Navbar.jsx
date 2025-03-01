import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = ({ setShowLogin }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-wrapper"]}>
        <div className={styles["navbar-left"]}>
          <span className={styles["navbar-language"]}>EN</span>
          <div className={styles["navbar-searchContainer"]}>
            <input
              type="text"
              placeholder="search"
              className={styles["navbar-input"]}
            />
            <IoSearch className={styles.icon} />
          </div>
        </div>
        <Link to="/">
          <div className={styles["navbar-center"]}>
            <h1 className={styles["navbar-logo"]}>
              Shopping Hub <span>.</span>
            </h1>
          </div>
        </Link>
        <div className={styles["navbar-right"]}>
          <div className={styles["navbar-menuItem"]}>
            <button onClick={toggleDropdown}>Products</button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className={styles["dropdown-menu"]}>
                <Link
                  to="/category/Cozy Fall Collection"
                  className={styles["dropdown-item"]}
                >
                  Cozy Fall
                </Link>
                <Link
                  to="/category/Floral Spring Collection"
                  className={styles["dropdown-item"]}
                >
                  Floral Spring
                </Link>
                <Link
                  to="/category/Summer Essentials Fashion"
                  className={styles["dropdown-item"]}
                >
                  Summer Essentials
                </Link>
              </div>
            )}
          </div>

          <div className={styles["navbar-menuItem"]}>
            <button onClick={() => setShowLogin(true)}>Sign-in</button>
          </div>

          <Link to="/cart">
            <div className={styles["navbar-menuItem"]}>
              <MdOutlineShoppingCart className={styles.icon} />
              {totalItems > 0 && (
                <span className={styles["cart-badge"]}>{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
