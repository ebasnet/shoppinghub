import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import { allProducts } from "../../data/Data";

function AllProducts() {
  return (
    <div>
      <Navbar />
      <Products items={allProducts} heading="Products" />
      <Footer />
    </div>
  );
}

export default AllProducts;
