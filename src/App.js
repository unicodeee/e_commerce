import React, { useState, useEffect } from "react";
import { NavBar, Products, Cart, Checkout } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { render } from "react-dom";

import { commerce } from "./lib/commerce";
import TestButton from "./TestButton";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()); // set cart
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  // handle in Cart
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  let navigate = useNavigate();
  const pathname = window.location.pathname;
  return (
    <div>
      <NavBar totalItems={cart.total_items}></NavBar>
      <Routes>
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          }
        />
        <Route
          path="products"
          element={
            <Products products={products} onAddToCard={handleAddToCart} />
          }
        />

        <Route path="checkout" element={<Checkout cart={cart} />} />

        {pathname == "/" ? navigate("/products") : false}
      </Routes>
    </div>
  );
};

export default App;
