import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./cartItem.css";

export const CartItem = ({ id, image, title, price, quantity }) => {
  const { removeFromCart } = useShoppingCart();

  const total = (parseFloat(price.replace("$", "")) * quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={image} alt={title} className="cart-item__image" />

      <div className="cart-item__info">
        <p className="cart-item__title">{title}</p>
        <span className="cart-item__meta">
          {price} x {quantity}
        </span>
      </div>

      <span className="cart-item__total">${total}</span>

      <button className="cart-item__remove" onClick={() => removeFromCart(id)}>
        ×
      </button>
    </div>
  );
};
