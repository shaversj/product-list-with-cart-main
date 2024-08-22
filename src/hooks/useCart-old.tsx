import { useState } from "react";

export type Cart = {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

export default function useCartOld() {
  const [cart, setCart] = useState<Cart>({ items: [] });

  const addToCart = (item: { name: string; price: number }) => {
    if (cart.items.some((cartItem) => cartItem.name === item.name)) {
      setCart({
        items: cart.items.map((cartItem) => {
          if (cartItem.name === item.name) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        }),
      });
    } else {
      setCart({
        items: [...cart.items, { name: item.name, price: item.price, quantity: 1 }],
      });
    }
  };

  const removeFromCart = (item: { name: string; price: number }) => {
    if (cart.items.some((cartItem) => cartItem.name === item.name)) {
      setCart({
        items: cart.items.map((cartItem) => {
          if (cartItem.name === item.name) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        }),
      });
    } else {
      setCart({
        items: [...cart.items, { name: item.name, price: item.price, quantity: 1 }],
      });
    }

    // Remove item from cart if quantity is 0
    if (cart.items.some((cartItem) => cartItem.quantity === 0)) {
      setCart({
        items: cart.items.filter((cartItem) => cartItem.quantity !== 0),
      });
    }
  };

  return { cart, addToCart, removeFromCart };
}
