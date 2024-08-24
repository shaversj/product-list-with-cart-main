"use client";

import { Cart } from "@/types/cart";

export default function CartDetails({ cart, dispatch }: { cart: Cart; dispatch: any }) {
  const cartTotal = cart.products.reduce((acc, item) => acc + item.price * item.quantity!, 0);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className={"mt-[2rem] rounded-lg bg-white px-6 pb-6 lg:col-start-2"}>
        <div className={"divide-y divide-rose-100 bg-white"}>
          {cart.products?.map((product, idx) => (
            <div key={product.name + idx} className={"flex items-center pb-4 pt-4"}>
              <div>
                <h3 className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>{product.name}</h3>
                <div className={"flex gap-x-[.5rem] pt-[.5rem]"}>
                  <span className={"text-[0.875rem] leading-[150%] text-red"}>{product.quantity}x &nbsp;</span>
                  <span className={"text-[0.875rem] font-light leading-[150%] text-rose-500"}>@${product.price}</span>
                  <span className={"text-[0.875rem] font-semibold leading-[150%] text-rose-500"}>${product.quantity! * product.price}</span>
                </div>
              </div>

              <button className={"ml-auto"} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 1.25C5.125 1.25 1.25 5.125 1.25 10C1.25 14.875 5.125 18.75 10 18.75C14.875 18.75 18.75 14.875 18.75 10C18.75 5.125 14.875 1.25 10 1.25ZM10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5Z"
                    fill="#AD8A85"
                  />
                  <path
                    d="M13.375 14.375L10 11L6.625 14.375L5.625 13.375L9 10L5.625 6.625L6.625 5.625L10 9L13.375 5.625L14.375 6.625L11 10L14.375 13.375L13.375 14.375Z"
                    fill="#AD8A85"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className={"flex items-center pt-6"}>
          <span className={"block text-[0.875rem] leading-[150%] text-rose-900"}>Order Total</span>
          <span className={"ml-auto text-[1.5rem] font-bold leading-[125%] text-rose-900"}>{cart ? USDollar.format(cartTotal) : 0}</span>
        </div>

        <div className={"pt-6"}>
          <div className={"flex items-center justify-center gap-x-[.5rem] bg-rose-50 py-4"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>
            <span className={"text-[14px] text-rose-900"}>
              This is a <span className={"font-medium"}>carbon-neutral </span> delivery
            </span>
          </div>
        </div>

        <div className={"pt-6"}>
          <button className={"w-full rounded-full bg-red py-4 text-white"}>
            <span className={"text-[1rem] leading-[150%]"}>Confirm Order</span>
          </button>
        </div>
      </div>
    </>
  );
}
