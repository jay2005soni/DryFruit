import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetailPage from "./components/Productdetail";
import AboutPage from "./components/Aboutpage";
import Header from "./components/Header";
// main.jsx or App.jsx
import './index.css'; // or your custom CSS file
import BulkOrderPage from "./components/Bulkorderpage";
import Carrer from "./components/Carrer";
import Contact from "./components/Contact";
import Nuts from "./components/Nuts";
import Dates from "./components/Dates";
import DFH_Exclusive from './components/DFH_Exclusive'; // Update path based on your folder structure
import Seeds from "./components/Seeds";
import Gifts from "./components/Gifts";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/bulkorder" element={<BulkOrderPage />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/nuts" element={<Nuts />} />
          <Route path="/shop/dates" element={<Dates />} />
          <Route path="/shop/exclusives" element={<DFH_Exclusive />} />
          <Route path="/shop/berries" element={<Nuts />} />
          <Route path="/shop/seeds" element={<Seeds/>} />
          <Route path="/shop/gifts" element={<Gifts />} />
      </Routes>
    </>
  );
}
