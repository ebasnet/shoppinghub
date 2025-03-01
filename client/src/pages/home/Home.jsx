import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import BestSellers from "../../components/products/BestSellers";
import NewArrival from "../../components/products/NewArrival";
import Slider from "../../components/slider/Slider";
import { useState } from "react";
import Login from "../../pages/login/Login";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Announcement />
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Slider />
        <Categories />
        <NewArrival />
        <BestSellers />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
