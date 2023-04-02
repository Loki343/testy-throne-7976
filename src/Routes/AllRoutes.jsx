import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import { MenProductPage } from "../Pages/MenProductPage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import WomenProductPage from "../Pages/WomenProductPage";
import SingleProductPage from "../Pages/Product_to_Payment/SingleProductPage";
import CartPage from "../Pages/Product_to_Payment/CartPage";
import Error from "../Components/Products/Error";
import Dashboard from "../AdminPage/Pages/Dashboard/Dashboard";
import SearchBar from "../AdminPage/Navbar/SearchBar";
import AdminNavbar from "../AdminPage/Navbar/Navbar";
import RealDashboard from "../AdminPage/Pages/Dashboard/RealDashboard";
import RealAdminProducts from "../AdminPage/Pages/MenProducts/RealAdminProducts";
import RealAdminUser from "../AdminPage/Pages/Users/RealAdminUser";
import RealAdminWomen from "../AdminPage/Pages/WomenProducts/RealAdminWomen";
import Order from "../AdminPage/Pages/Order/Order";
import RealAdminOrder from "../AdminPage/Pages/Order/RealAdminOrder";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/men-product" element={<MenProductPage />} />
      <Route path="/men-product:id" element={<SingleProductPage />} />
      <Route path="/women-product:id" element={<SingleProductPage />} />
      <Route path="/women-product" element={<WomenProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Error />} />

      {/* Admin routes */}
      <Route path="/admin-dashboard" element={<RealDashboard/>} />
      <Route path="/admin-menproducts" element={<RealAdminProducts/>} />
      <Route path="/admin-womenproducts" element={<RealAdminWomen/>} />
      <Route path="/admin-user" element={<RealAdminUser />} />
      <Route path="/admin-order" element={<RealAdminOrder />} />
      


      
    </Routes>
  );
};

export default AllRoutes;
