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
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SigninAdmin from "../Pages/SigninAdmin/SigninAdmin";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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

      {/* <Route
        path="/men"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <h1>Men Page</h1>
              <Footer />
            </PrivateRoute>
          </>
        }
      /> */}
      <Route path="/men-product" element={<MenProductPage />} />
      <Route path="/men-product:id" element={<SingleProductPage />} />
      <Route path="/women-product:id" element={<SingleProductPage />} />
      <Route path="/women-product" element={<WomenProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Error />} />

    </Routes>
  );
};

export default AllRoutes;
