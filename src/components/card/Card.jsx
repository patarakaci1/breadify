import React from "react";
import "./Card.css";

const Card = ({
  image,
  badge = "Popular",
  title,
  description,
  calories,
  protein,
  price,
  inCart = false,
  onToggleCart,
}) => {
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
        <button
          className={`card__btn ${inCart ? "card__btn--remove" : "card__btn--add"}`}
          onClick={onToggleCart}
        >
          {inCart ? "− Remove from cart" : "+ Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
