import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import { MenProductPage } from "../Pages/MenProductPage";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import WomenProductPage from "../Pages/WomenProductPage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/men-product" element={<MenProductPage />} />
      <Route path="/women-product" element={<WomenProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
