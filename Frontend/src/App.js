import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./footer/Footer";
import Jewel from "./Jewel/Jewel";
import Accessories from "./Accessories/Accessories";
import Cart from "./cart/Cart";
function App() {
  const [jewel, setJewel] = useState();

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:8080/jewelry/all");
      console.log(response.data);
      setJewel(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Router>
      {/* <Nav /> */}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[<Nav />, <Home jewel={jewel} />, <Footer />]}
          />
          <Route
            path="/Accessories"
            element={[<Nav />, <Accessories jewel={jewel} />, <Footer />]}
          />
          <Route path="/Cart" element={[<Nav />, <Cart />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
