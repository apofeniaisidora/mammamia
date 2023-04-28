import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);
  const [suma, setSuma] = useState(0);

  const addCartArray = (pizza) => {
    let sum = 0;
    const checkIndex = cartArray.findIndex((item) => item.id === pizza.id);

    if (checkIndex < 0) {
      setCartArray([
        ...cartArray,
        {
          desc: pizza.desc,
          id: pizza.id,
          img: pizza.img,
          ingredients: pizza.ingredients,
          name: pizza.name,
          price: pizza.price,
          amount: 1,
        },
      ]);
    } else {
      cartArray[checkIndex].amount++;
    }
    for (const item of cartArray) {
      sum += item.price * item.amount;
    }
    setSuma(sum);
  };
  const removeCartArray = (pizza) => {
    let sum = 0;
    const checkIndex = cartArray.findIndex((item) => item.id === pizza.id);
    !(cartArray[checkIndex].amount === 1)
      ? cartArray[checkIndex].amount--
      : null;
    for (const item of cartArray) {
      sum += item.price * item.amount;
    }
    setSuma(sum);
  };

  return (
    <CartContext.Provider
      value={{ cartArray, setCartArray, addCartArray, suma, removeCartArray }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
