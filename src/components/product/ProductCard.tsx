import QuantitySelector from "@/components/product/QuantitySelector";
import AddToCartButton from "@/components/product/AddToCartButton";
import { Product } from "@/types/product";

export default function ProductCard({ product, cart, dispatch }: { product: Product; cart: any; dispatch: any }) {
  const isItemInCart = cart.products.some((cartItem: Product) => cartItem.name === product.name);

  return (
    <div key={product.name} className="flex flex-col items-start">
      <div className={"md:w-[13.333rem] md:h-[13.25rem] relative h-[13.25rem] w-[20.438rem] lg:h-[15rem] lg:w-[15.667rem]"}>
        <picture>
          <source media="(min-width:1440px)" srcSet={product.image.desktop} width={250.67} height={240} type="image/jpeg" />
          <source media="(min-width:768px)" srcSet={product.image.tablet} width={213.33} height={212} type="image/jpeg" />
          <img className={"rounded-lg"} src={product.image.mobile} alt={product.name} width={327} height={212} />
        </picture>

        {isItemInCart ? (
          <QuantitySelector dispatch={dispatch} product={product} cart={cart} />
        ) : (
          <AddToCartButton dispatch={dispatch} product={product} />
        )}
      </div>

      <h2 className={"pt-[2.375rem] text-[0.875rem] leading-[150%] text-rose-500"}>{product.name}</h2>
      <p className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>{product.category}</p>
      <p className={"text-[1rem] font-semibold leading-[150%] text-red"}>${product.price}</p>
    </div>
  );
}
