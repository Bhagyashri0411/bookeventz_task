import React, { useEffect, useState } from "react";
import axios from "axios"
import shop from "../assets/shop1.webp";

const ProductItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch get mapping that return all products
    axios.get('http://localhost:5000/products')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  // Add to cart Function
  const addToCart = (product) => {
    const itemToAdd = { ...product, quantity: 1 };

    // Send a POST request that to add the item to the cart
    axios.post('http://localhost:5000/cart/add', itemToAdd)
      .then((response) => {
        alert(`Items ${itemToAdd.name} added successfully`)
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  // End
  return (
    <>

      <div className="row">

        {items.map((item, key) => (
          <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
            <div className="card px-4 border shadow-0 mb-4 mb-lg-0 py-4">
              <a href="#" className>
                <img src={shop} alt="not found" className="card-img-top rounded-2" />
              </a>
              <div className="card-body d-flex flex-column pt-3 border-top">
                <a href="#" className="nav-link">{item.name}</a>
                <div className="price-wrap mb-2">
                  <strong className>${item.price}</strong>
                </div>
                <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  <button onClick={() => addToCart(item)} className="btn btn-outline-primary w-100" >Add to cart</button>
                </div>
              </div>
            </div>
          </div>))}

      </div>
    </>
  )
}

export default ProductItems;