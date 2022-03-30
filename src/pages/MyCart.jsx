import "./mycart.css";

const MyCart = ({ cartItem }) => {
  let total = null;

  return (
    <div className="mycart-container">
      <div className="mycart-head">
        <span>Items</span>
        <span>Price</span>
      </div>
      <div className="mycart-products">
        {cartItem.map((product) => (
          <div className="mycart-product-container">
            <div className="mycart-product-calculate">
              {(total += product.price)}
            </div>
            <div className="mycart-product-image">
              <img src={product.img} alt="card"></img>
            </div>
            <div className="mycart-product-details">
              <div className="mycart-product-title">{product.title} </div>
              <div className="mycart-product-price">${product.price} CAD</div>
            </div>
          </div>
        ))}
        {cartItem.length > 0 ? (
          <div className="mycart-total">
            <div className="mycart-total-header">Total:</div>
            <div>${total} CAD</div>
          </div>
        ) : (
          <div className="mycart-empty"> Cart is Empty </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
