import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  //its summing all the items with reduce starting from 0
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0; //if quantity give me show quantity if not 0
  }

  function increaseCartQuantity(id, details) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1, ...details }];
      } else {
        return curItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((curItems) => {
      //find is searching itemas which are equal to id
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        //if item we have found has quantity 1
        return curItems.filter((item) => item.id !== id); //filter is ridding it off. item.id !== id leaving items that arent that item id
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id); //filter is ridding it off. item.id !== id leaving items that arent that item id
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        openCart,
        closeCart,
        isOpen,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} /> */}
    </ShoppingCartContext.Provider>
  );
}
