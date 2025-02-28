import Home from "./pages/home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/all products/AllProducts";
import SingleProduct from "./pages/singleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
