import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductsContext";
import "./index.css";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductsPage from "./pages/ProductsPage";
import ProductFormPage from "./pages/admin/ProductFormPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<ProductsPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="confirmation" element={<ConfirmationPage />} />
      <Route path="/product/:id" element={<ProductDescriptionPage />} />
      <Route path="admin">
        <Route index element={<AdminProductsPage />} />
        <Route path="product/new" element={<ProductFormPage />} />
        {/*Bortkommenterade kodraden fungerar */}
        {/* <Route path="product/:id" element={<ProductFormPage />} /> */}
        <Route path="product/:id" element={<AdminProductsPage />} />
        {/* Koden ovanför är den koden som inte fungerar */}
      </Route>
      <Route path="*" element={<div>Not Found </div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
