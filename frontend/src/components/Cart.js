import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shop from "../assets/shop1.webp";
import axios from "axios";

function Cart() {

  const [cart, setCart] = useState([]);
  
  const GetItems = () => {
    axios.get('http://localhost:5000/cart/items')
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    GetItems()
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    axios.post('http://localhost:5000/cart/remove', { id: productId })
      .then((response) => {
        GetItems();
      })
      .catch((error) => {
        console.error('Error removing item from the cart:', error);
      });
  };

  const calculateTotalCost = (cart) => {

    let totalCost = 0;

    for (const item of cart) {
      let itemCost = item.product.price * item.quantity;

      if (item.id === 1 && item.quantity >= 3) {
        // discount for Item A when add 3 items 
        itemCost = Math.floor(item.quantity / 3) * 75 + (item.quantity % 3) * item.product.price;
      } else if (item.id === 2 && item.quantity >= 2) {
        //  discount for Item B when add 2 items
        itemCost = Math.floor(item.quantity / 2) * 35 + (item.quantity % 2) * item.product.price;
      }

      totalCost += itemCost;
    }

    // discount if the total cost is over Rs 150
    if (totalCost > 150) {
      totalCost -= 20;
    }

    return totalCost;
  };

  const totalCost = calculateTotalCost(cart);

  // Calculate the total cost of items in the cart
  const realCost = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const discountCost = realCost - totalCost;

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            {/* cart */}
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {cart.map((item) => (

                    <div className="row gy-3 mb-4" key={item.id}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img src={shop} alt="not found" className="border rounded me-3" style={{ width: '96px', height: '96px' }} />
                          <div className>
                            <a href="#" className="nav-link">{item.product.name}</a>
                          </div>
                        </div>

                        <div className>
                          <text className="h6">${item.product.price} × {item.quantity}</text> <br />
                        </div>
                        <div className="float-md-end">
                          <a href="#!" className="btn btn-light border px-2 icon-hover-primary"><i className="fa fa-heart fa-lg px-1 text-secondary" /></a>
                          <button className="btn btn-light border text-danger icon-hover-danger" onClick={() => removeFromCart(item.id)}> Remove</button>
                        </div>
                      </div>

                    </div>
                  ))}

                </div>

              </div>
            </div>


            {/* cart */}
            {/* summary */}
            <div className="col-lg-3">

              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Real price:</p>
                    <p className="mb-2">${realCost}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-${discountCost}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">${totalCost} </p>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-success w-100 shadow-0 mb-2"> Buy Now </a>
                    <Link to="/" className="btn btn-light w-100 border mt-2"> Back to shop </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* summary */}
          </div>
        </div>
      </section>
    </>
  )
}
export default Cart;