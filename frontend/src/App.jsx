import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import ProductDetailPage from "./components/Productdetail";
import Categories from "./components/category";
import Sign_in from "./user/sign_in";
import AdminSlider from "./components/AdminSlider";
import ImageSlider from "./components/Slider";
export default function App() {
  return (
     <Routes>
      <Route path= "/" element = {<Sign_in />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/add/slider" element={<AdminSlider />} />
      <Route path="/slider" element={<ImageSlider />} />
      
      </Routes>
  );

}
