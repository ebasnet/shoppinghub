import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default App;
