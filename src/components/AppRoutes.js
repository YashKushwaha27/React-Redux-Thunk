import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./productHome";
import SelectedProduct from "./selectedProduct";

export default function AppRoutes({ data }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ProductPage data={data} />} />
        <Route path="/product/:id" element={<SelectedProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
