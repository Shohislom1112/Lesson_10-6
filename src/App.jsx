// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import SinglProduckt from "./pages/singleproduckt/SinglProduckt";
import Header from "./components/Header";
// import Home from "./pages/home/Home";
// import Home from "./pages/home/Home";
// import Home from "./pages/home/Home";
// import Home from "./pages/home/Home";
// import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/SinglProduckt" element={<SinglProduckt />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
