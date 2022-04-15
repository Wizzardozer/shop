import "./mycart.css";
import PayPal from "../components/PayPal";
import { FaTimes } from "react-icons/fa";

const MyCart = ({ cartItem, removeFromCart, addQuantity, removeQuantity }) => {
  // let total2 = useRef(0);

  const total = cartItem.reduce((acc, currentPrice) => {
    return acc + currentPrice.price * currentPrice.qty;
  }, 0);

  return (
    <div className="mycart-container">
      <div className="mycart-head">
        <span>Items</span>
        <span>Price</span>
      </div>
      <div className="mycart-products">
        {cartItem.map((product) => (
          <div key={product.id} className="mycart-product-container">
            <div className="mycart-product-calculate"></div>
            <div className="mycart-product-image">
              <img src={product.img} alt="card"></img>
            </div>
            <div className="mycart-product-details">
              <div className="mycart-product-title">{product.title} </div>
              <div className="mycart-product-quantity">
                <div
                  className="mycart-product-quantity-remove"
                  onClick={() => removeQuantity(product.id)}
                >
                  -
                </div>
                <div className="mycart-product-quantity-amount">
                  {product.qty}
                </div>
                <div
                  className="mycart-product-quantity-add"
                  onClick={() => addQuantity(product.id)}
                >
                  +
                </div>
              </div>

              <div className="mycart-product-remove">
                <FaTimes
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                />
              </div>
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
        {cartItem.length > 0 && <PayPal cartItem={cartItem} total={total} />}
      </div>
    </div>
  );
};

export default MyCart;
