import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Slider />
    </div>
  );
};

export default App;
