import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetailPage from "./components/Productdetail";
import Categories from "./components/category";
import Sign_in from "./user/sign_in";
import AdminSlider from "./components/AdminSlider";
import ImageSlider from "./components/Slider";
import AddProduct from "./components/AddProduct";
import RetailerProduct from "./components/RetailerProduct";
import AdminDashboard from "./dashboard/AdminDashboard";
import Layout from "./layout/Layout"; // ✅ new layout

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin/login" element={<Sign_in />} />

      {/* Protected Routes with Sidebar */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/add/slider" element={<AdminSlider />} />
        <Route path="/slider" element={<ImageSlider />} />
        <Route path="/add/product" element={<AddProduct />} />
        <Route path="/retailer/:id" element={<RetailerProduct />} />
      </Route>
    </Routes>
  );
}
