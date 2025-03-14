import "./categories.css";
import { categories } from "../../data/Data";
import Image from "../Image";
import { Link } from "react-router-dom";

const Categories = ({ category, setCategory }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return (
          <div key={item.id} className="category-container">
            <Image imgSrc={item.img} />
            <div className="category-info">
              <h1>{item.title}</h1>
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
