import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { BiShoppingBag } from "react-icons/bi";
import { decreaseQuantity, removeFromCart } from "../../redux/cartSlice";
import { IoClose } from "react-icons/io5";
import Footer from "../../components/footer/Footer";
import "./Cart.css";
import Login from "../login/Login";

import { useState } from "react";
function Cart() {
  const [showLogin, setShowLogin] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />

      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />

          <h2 className="cart-title">Shopping Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <p>Your Cart is Empty.Added Items will be displayed here</p>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">Product</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Total</div>
                </div>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={item.img}
                        alt=""
                        className="cart-product-image"
                      />
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">Rs.{item.price}</div>
                    <div className="cart-quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>
                        {" "}
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item))}>
                        {" "}
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      Rs.{parseFloat(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      {" "}
                    </button>
                    <IoClose size={20} />
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Price:</span>
                    <span>Rs.{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-item">
                    <span>Total:</span>
                    <span>Rs.{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button className="checkout-btn">Proceed To Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
