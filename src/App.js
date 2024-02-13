import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./components/MainLayout";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import AddCategory from "./pages/AddCategory";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddColor from "./pages/Color";
import AddBrand from "./pages/AddBrand";
import AddCoupon from "./pages/AddCoupon";
import CouponList from "./pages/CouponList";
import AddProduct from "./pages/AddProduct";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-category" element={<BlogCatList />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-blog-category" element={<AddBlogCat />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="color" element={<AddColor />} />
          <Route path="color-list" element={<ColorList />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="add-brand" element={<AddBrand />} />
          <Route path="brand-list" element={<BrandList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-coupon" element={<AddCoupon />} />
          <Route path="coupon-list" element={<CouponList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
