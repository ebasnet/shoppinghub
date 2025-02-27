import { CiSearch, CiShoppingCart } from "react-icons/ci";
import styles from "./products.module.css"; // Importing the CSS module

function Products({ items, heading }) {
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
            />
            <div className={styles.productDesc}>
              <h3>{item.title}</h3>
              <span>Rs.{item.price}</span>
            </div>
            <div className={styles.productInfo}>
              <button className={styles.icon}>
                <CiShoppingCart /> Add To Cart
              </button>
              <button className={styles.icon}>
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
