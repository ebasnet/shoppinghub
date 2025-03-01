import "./categories.css";
import { categories } from "../../data/Data";
import Image from "../Image";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

const Categories = ({ category, setCategory }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        // Render category only if it matches the selected category or if "All" is selected
        return (
          <div key={item.id} className="category-container">
            <Image imgSrc={item.img} />
            <div className="category-info">
              <h1>{item.title}</h1>
              {/* Link to the category page */}
              <Link to={`/category/${item.title}`}>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
