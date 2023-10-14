// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductItems from "./components/ProductItems";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  
  // Add to cart Function
  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id); // existingItemIndex varable store item 

    if (existingItemIndex !== -1) { // this is condition for if same item add again then quantity will add 
      const cartItems = [...cart];
      cartItems[existingItemIndex].quantity += 1;
      setCart(cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));

    }
    // Other wise add that
    else {
      const cartItems = [...cart, { ...product, quantity: 1 }];
      setCart(cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  // End

  // Remove item from cart
  const removeFromCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        // Decrease the quantity of the item
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        // Remove the item from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  // END 

  return (
    <div className="App p-5">
      <div className="container">

        <div className="d-flex flex-column align-items-center justify-content-center p-5 border-bottom">
          <h1>Coding Challenge- Ecommerce Cart</h1>
        </div>
        <div className="p-5 border-top">

          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <ProductItems addToCart={addToCart} />
              </Route>
              <Route path="/cart">
                <Cart cart={cart} removeFromCart={removeFromCart} />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
