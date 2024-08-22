"use client";

import { Cart } from "@/types/cart/cart";
import { Product } from "@/types/dessert/product";

import { useReducer } from "react";

export default function useCart({ initialCart }: { initialCart: Cart }) {
  const cartReducer = (state: Cart, action: { type: string; payload: Product }) => {
    switch (action.type) {
      case "ADD_TO_CART":
        if (state.products.some((product) => product.name === action.payload.name)) {
          return {
            products: state.products.map((product) => {
              if (product.name === action.payload.name) {
                return {
                  ...product,
                  quantity: product.quantity! + 1,
                };
              }
              return product;
            }),
          };
        } else {
          return {
            products: [...state.products, { ...action.payload, quantity: 1 }],
          };
        }
      case "REMOVE_FROM_CART":
        return {
          products: state.products
            .map((product) => {
              if (product.name === action.payload.name) {
                return {
                  ...product,
                  quantity: product.quantity! - 1,
                };
              }
              return product;
            })
            .filter((product) => product.quantity! > 0),
        };
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, initialCart as Cart);

  return { cart, dispatch };
}
