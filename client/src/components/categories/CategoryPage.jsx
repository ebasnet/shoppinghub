import { useParams, Link, useNavigate } from "react-router-dom"; // useNavigate is needed for navigation
import { allProducts } from "../../data/Data";
import { CiShoppingCart, CiSearch } from "react-icons/ci"; // For the buttons
import Navbar from "../navbar/Navbar";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { addToCart } from "../../redux/cartSlice"; // Import the addToCart action
import "./categoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const dispatch = useDispatch(); // Create the dispatch function
  const navigate = useNavigate(); // Hook for navigation

  // Filter products based on category
  const categoryProducts = allProducts.filter(
    (product) => product.category === categoryName
  );

  // Function to handle adding products to the cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); // Dispatch the addToCart action to Redux
  };

  // Function to navigate to product details page
  const handleViewDetails = (id) => {
    navigate(`/products/${id}`); // Navigate to the product details page
  };

  return (
    <div>
      <Navbar />
      <h1>{categoryName} Products</h1>
      <div className="products-container">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: Rs. {product.price}</p>

              <div className="product-info">
                <button
                  className="icon"
                  onClick={() => handleAddToCart(product)} // Trigger the dispatch on click
                >
                  <CiShoppingCart /> Add To Cart
                </button>
                <button
                  className="icon"
                  onClick={() => handleViewDetails(product.id)} // Pass correct product id
                >
                  <CiSearch /> View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
