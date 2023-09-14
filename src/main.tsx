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
import AdminPage from "./pages/AdminPage";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="confirmation" element={<ConfirmationPage />} />
      <Route path="/product/:id" element={<ProductDescriptionPage />} />
      <Route path="admin">
        <Route index element={<AdminPage />} />
        <Route path="product/new" element={<CreateProductPage />} />
        <Route path="product/:id" element={<EditProductPage />} />
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
