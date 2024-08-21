"use client";

import { useState } from "react";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";

interface Dessert {
  name: string;
  category: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export default function DessertCard({ dessert }: { dessert: Dessert }) {
  const [quantity, setQuantity] = useState(0);
  const [cartHasItem, setCartHasItem] = useState(false);

  const addToCart = () => {
    setQuantity(quantity + 1);
    setCartHasItem(true);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setCartHasItem(false);
    }
  };

  return (
    <div key={dessert.name} className="flex flex-col items-start">
      <div className={"md:w-[13.333rem] md:h-[13.25rem] relative h-[13.25rem] w-[20.438rem] lg:h-[15rem] lg:w-[15.667rem]"}>
        <picture>
          <source media="(min-width:1440px)" srcSet={dessert.image.desktop} width={250.67} height={240} type="image/jpeg" />
          <source media="(min-width:768px)" srcSet={dessert.image.tablet} width={213.33} height={212} type="image/jpeg" />
          <img className={"rounded-lg"} src={dessert.image.mobile} alt={dessert.name} width={327} height={212} />
        </picture>

        {cartHasItem ? (
          <QuantitySelector addQuantity={addQuantity} removeQuantity={removeQuantity} quantity={quantity} />
        ) : (
          <AddToCartButton addToCart={addToCart} />
        )}
      </div>

      <h2 className={"pt-[2.375rem] text-[0.875rem] leading-[150%] text-rose-500"}>{dessert.name}</h2>
      <p className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>{dessert.category}</p>
      <p className={"text-[1rem] font-semibold leading-[150%] text-red"}>${dessert.price}</p>
    </div>
  );
}
