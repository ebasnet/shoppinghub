import Home from "./pages/home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Login from "./pages/login/Login";
import AllProducts from "./pages/all products/AllProducts";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./components/categories/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
