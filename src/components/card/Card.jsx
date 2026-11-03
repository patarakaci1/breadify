import React from "react";
import "./Card.css";

/** @param {{ image: string, badge?: string, title: string, description: string, calories: string | number, protein: string | number, price: string | number, inCart?: boolean, onToggleCart?: () => void }} props */
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
<div>
{inCart ? (
<div>
<button  className="card__btn-icon left">-</button>
<span>hi</span>
<button className="card__btn-icon ">+</button>
<button className="card__btn--remove">remove</button>
</div>
          ) :(
<button className="card__btn" onClick={onToggleCart}><span className="card__btn-icon-1">+</span>Add to cart</button>
          )}
</div>
</div>
</div>
  );
};

export default Card;