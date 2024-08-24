"use client";

import { products } from "@/constants/store-items";
import useCart from "@/hooks/useCart";
import CartHeader from "@/components/cart/CartHeader";
import EmptyCartMessage from "@/components/cart/EmptyCartMessage";
import CartDetails from "@/components/cart/CartDetails";
import ProductList from "@/components/product/ProductList";
import ProductHeader from "@/components/product/ProductHeader";

export default function Home() {
  const { cart, dispatch } = useCart({ initialCart: { products: [] } });
  const numberOfCartItems = cart.products.reduce((acc, item) => acc + item.quantity!, 0);

  return (
    <div className={"md:w-[43rem] md:px-0 mx-auto sm:px-6 lg:grid lg:w-[76rem] lg:grid-cols-[65.79%,31.58%] lg:grid-rows-[460px,auto] lg:gap-x-8"}>
      <section className={"lg:row-span-full"}>
        <ProductHeader />
        <ProductList products={products} cart={cart} dispatch={dispatch} />
      </section>

      <section className={"rounded-lg bg-white pt-6 lg:mt-[5.5rem]" + (cart.products.length === 0 ? " lg:h-[299px]" : "")}>
        <CartHeader numberOfCartItems={numberOfCartItems} />
        {cart.products.length === 0 ? <EmptyCartMessage /> : <CartDetails cart={cart} dispatch={dispatch} />}
      </section>
    </div>
  );
}
