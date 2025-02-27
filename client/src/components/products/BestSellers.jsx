import { bestsellers } from "../../data/Data";
import Products from "./Products";

function BestSellers() {
  return <Products items={bestsellers} heading="Best Sellers" />;
}

export default BestSellers;
