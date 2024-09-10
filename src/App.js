import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/single" element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
