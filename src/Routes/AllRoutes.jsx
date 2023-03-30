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

    </Routes>
  );
};

export default AllRoutes;
