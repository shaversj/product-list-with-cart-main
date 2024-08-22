import { Product } from "@/types/dessert/product";
import { Cart } from "@/types/cart/cart";

export default function QuantitySelector({ dispatch, product, cart }: { dispatch: any; product: Product; cart: Cart }) {
  const getQuantityFromCart = (product: Product) => {
    const cartProduct = cart.products.find((cartProduct) => cartProduct.name === product.name);
    return cartProduct?.quantity;
  };

  return (
    <div
      className={
        "absolute -bottom-[8%] left-1/2 flex h-[2.75rem] w-[10rem] -translate-x-1/2 transform items-center justify-center rounded-full border border-rose-400 bg-red"
      }
    >
      <button className={"mr-auto pl-3"} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>
        <img src={"/assets/images/icon-subtract.svg"} alt={"Subtract to Cart"} className={"inline-block"} />
      </button>
      <span className={"text-[0.875rem] font-semibold leading-[150%] text-white"}>{getQuantityFromCart(product)}</span>
      <button className={"ml-auto pr-3"} onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        <img src={"/assets/images/icon-add.svg"} alt={"Add to Cart"} className={"inline-block"} />
      </button>
    </div>
  );
}
