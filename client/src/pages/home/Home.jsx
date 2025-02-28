import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/newsletter/NewsLetter";
import BestSellers from "../../components/products/BestSellers";
import NewArrival from "../../components/products/NewArrival";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrival />
      <BestSellers />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
