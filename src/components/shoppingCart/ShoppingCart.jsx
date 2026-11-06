import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "../cartItems/CartItem";

export const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
