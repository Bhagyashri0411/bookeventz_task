const ProductItems = ({ addToCart }) => {
  var items = [
    { id: 1, name: "Product A", price: 30 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 50 },
    { id: 4, name: "Product D", price: 15 },
  ];



  return (
    <>

      <div className="row">

        {items.map((item, key) => (
          <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
            <div className="card px-4 border shadow-0 mb-4 mb-lg-0">
              <a href="#" className>
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" className="card-img-top rounded-2" />
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