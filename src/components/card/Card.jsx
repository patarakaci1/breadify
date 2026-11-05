import "./Card.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

/** @param {{ id: string | number, image: string, badge?: string, title: string, description: string, calories: string | number, protein: string | number, price: string | number }} props */
const Card = ({
  id,
  image,
  badge = "Popular",
  title,
  description,
  calories,
  protein,
  price,
}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = /** @type {{
    getItemQuantity: (id: string | number) => number,
    increaseCartQuantity: (id: string | number) => void,
    decreaseCartQuantity: (id: string | number) => void,
    removeFromCart: (id: string | number) => void,
  }} */ (useShoppingCart());

  const quantity = getItemQuantity(id);

  return (
    <div className="card container">
      <img src={image} alt={title} className="card__image" />

      <div className="card__info">
        <span className="card__badge">{badge}</span>
        <p className="card__title">{title}</p>
      </div>

      <div className="card__desc-col">
        <p className="card__desc">{description}</p>
        <div className="card__macros">
          <span className="card__macro">{calories}</span>
          <span className="card__macro">{protein}</span>
        </div>
      </div>

      <div className="card__price-col">
        <span className="card__price">{price}</span>
        <div>
          {quantity === 0 ? (
            <button
              className="card__btn"
              onClick={() => increaseCartQuantity(id)}
            >
              <span className="card__btn-icon-1">+</span>Add to cart
            </button>
          ) : (
            <div>
              <button
                className="card__btn-icon left"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="card__btn-icon"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
              <button
                className="card__btn--remove"
                onClick={() => removeFromCart(id)}
              >
                remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;