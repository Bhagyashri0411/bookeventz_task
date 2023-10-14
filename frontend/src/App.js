// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import axios from 'axios';
import ProductItems from "./components/ProductItems";
import Cart from "./components/Cart";

const App = () => {

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
                <ProductItems />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
