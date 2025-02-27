import Products from "./Products";
import { newArrivals } from "../../data/Data";

function NewArrival() {
  return <Products items={newArrivals} heading=" New Arrivals" />;
}

export default NewArrival;
