import { CiSearch, CiShoppingCart } from "react-icons/ci";
import styles from "./products.module.css"; // Importing the CSS module
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Products({ items, heading }) {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.productsContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.productContainer}>
            <img
              src={item.img}
              alt={item.title}
              className={styles.productImage}
              onClick={() => handleViewDetails(item.id)}
            />
            <div className={styles.productDesc}>
              <h3>{item.title}</h3>
              <span>Rs.{item.price}</span>
            </div>
            <div className={styles.productInfo}>
              <button
                className={styles.icon}
                onClick={() => handleAddToCart(item)}
              >
                <CiShoppingCart /> Add To Cart
              </button>
              <button
                className={styles.icon}
                onClick={() => handleViewDetails(item.id)}
              >
                <CiSearch /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
