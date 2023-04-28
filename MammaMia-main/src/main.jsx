import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import PizzasProvider from "./assets/context/PizzasContext";
import CartProvider from "./assets/context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <PizzasProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzasProvider>
    </CartProvider>
  </React.StrictMode>
);
