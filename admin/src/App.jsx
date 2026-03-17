import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/UserManagement";
import ProductManagement from "./components/ProductManagement";
import EditProductPage from "./components/EditProductPage";
import OrderManagement from "./components/OrderManagement";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
