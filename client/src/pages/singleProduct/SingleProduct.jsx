import { useParams } from "react-router";
import "./singleProduct.css";
import { allProducts } from "../../data/Data";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";

function SingleProduct() {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];

  // State for selected color
  const [selectedColor, setSelectedColor] = useState(null);
  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["xs", "s", "l", "m"];

  // State for selected size
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="singleProduct-container">
      <Navbar />
      <div className="singleProduct-wrapper">
        <div className="singleProduct-imageSection">
          <img
            src={product.img}
            alt={product.title}
            className="singleProduct-image"
          />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className="singleProduct-title">{product.title}</h2>
          <p className="singleProduct-number">Rs.{product.price}</p>
          <h4 className="description-title">Description</h4>
          <p className="singleProduct-desc">{product.description}</p>

          <div className="singleProduct-options">
            <div className="colors-section">
              <h4>Colors</h4>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="color-circle"
                    style={{
                      backgroundColor: color,
                      outline:
                        selectedColor === color ? `3px solid ${color}` : "",
                    }}
                    onClick={() => handleCircleClick(color)}
                  />
                ))}
              </div>
            </div>

            <div className="sizes-section">
              <h4>Sizes</h4>
              <div className="sizes">
                {sizes.map((size) => (
                  <span
                    key={size}
                    style={{
                      border: selectedSize === size ? "1px solid #ccc" : "",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="addToCart">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
