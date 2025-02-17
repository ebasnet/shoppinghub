import "./categories.css";
import { categories } from "../../data/Data";
import Image from "../Image";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return (
          <div key={item.id} className="category-container">
            <Image imgSrc={item.img} />
            <div className="category-info">
              <h1>{item.title}</h1>
              <button>Shop Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
