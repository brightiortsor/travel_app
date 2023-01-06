import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
    </div>
  );
}

export default App;
