// Product added to cart shown in CartDropdown which is a popover upon hover over cartIcon.
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img className="cart-item-image" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
