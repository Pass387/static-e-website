import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { ProductSearch } from "./components/search";
import ProductDetail from "./components/productDetails";
import AboutContact from "./components/about";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<ProductSearch />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutContact />} />
      </Routes>
      <Footer />


    </Router>
  );
}

export default App;