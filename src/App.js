import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";
import Offers from "./components/Offers/Offers";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Popular />
      <Offers />
    </div>
  );
}

export default App;
