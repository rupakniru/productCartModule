import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Cart from "./components/Cart";
import Home from "./components/Home";
import { CartProvider } from 'react-use-cart';
function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
