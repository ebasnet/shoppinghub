import { useParams, useNavigate } from "react-router-dom";
import { allProducts } from "../../data/Data";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import Navbar from "../navbar/Navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./categoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryProducts = allProducts.filter(
    (product) => product.category === categoryName
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
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
                  onClick={() => handleAddToCart(product)}
                >
                  <CiShoppingCart /> Add To Cart
                </button>
                <button
                  className="icon"
                  onClick={() => handleViewDetails(product.id)}
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
