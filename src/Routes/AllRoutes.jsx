import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import { MenProductPage } from "../Pages/MenProductPage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import WomenProductPage from "../Pages/WomenProductPage";
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
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SigninAdmin from "../Pages/SigninAdmin/SigninAdmin";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Pagination from "../Components/Products/Pagination";
import SingleProductPageWomen from "../Pages/SingleProductPageWomen";
import SingleProductPageMen from "../Pages/SingleProductPageMen";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Navbar />
            <Signin />
          </>
        }
      />
      <Route
        path="/signinadmin"
        element={
          <>
            <Navbar />
            <SigninAdmin />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <Signup />
          </>
        }
      />
      <Route
        path="/men-product"
        element={
          <>
            <Navbar />
            <MenProductPage />
            <Pagination />
            <Footer />
          </>
        }
      />
      <Route
        path="/women-product"
        element={
          <>
            <Navbar />
            <WomenProductPage />
            <Pagination />
            <Footer />{" "}
          </>
        }
      />
      <Route path="/women-product/:id" element={<><Navbar /><SingleProductPageWomen /><Footer /></>} />
      <Route path="/men-product/:id" element={<><Navbar /><SingleProductPageMen /><Footer /></>} />
      <Route path="/product/:id" element={<><Navbar /><SingleProductPageMen /><Footer /></>} />
      {/* <Route path="/cart" element={<CartPage />} /> */}
      <Route path="*" element={<Error />} />

      {/* Admin routes */}
      <Route path="/admin-dashboard" element={<RealDashboard />} />
      <Route path="/admin-menproducts" element={<RealAdminProducts />} />
      <Route path="/admin-womenproducts" element={<RealAdminWomen />} />
      <Route path="/admin-user" element={<RealAdminUser />} />
      <Route path="/admin-order" element={<RealAdminOrder />} />
    </Routes>
  );
};

export default AllRoutes;
