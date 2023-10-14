import { useEffect, useState } from "react";

function Cart({ cart, removeFromCart }) {

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            {/* cart */}
            <div className="col-lg-12">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {cart.map((item) => (

                    <div className="row gy-3 mb-4" key={item.id}>
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" className="border rounded me-3" style={{ width: '96px', height: '96px' }} />
                            <div className>
                              <a href="#" className="nav-link">{item.name}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">

                        <div className>
                          <text className="h6">${item.price} × {item.quantity}</text> <br />
                        </div>
                      </div>
                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a href="#!" className="btn btn-light border px-2 icon-hover-primary"><i className="fa fa-heart fa-lg px-1 text-secondary" /></a>
                          <button className="btn btn-light border text-danger icon-hover-danger" onClick={() => removeFromCart(item)}> Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>

              </div>
            </div>
       
          </div>
        </div>
      </section>
    </>
  )
}
export default Cart;