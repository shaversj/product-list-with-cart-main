import { Product } from "@/types/product";

export default function AddToCartButton({ dispatch, product }: { dispatch: any; product: Product }) {
  return (
    <button
      className={"absolute -bottom-[8%] left-1/2 h-[2.75rem] w-[10rem] -translate-x-1/2 transform rounded-full border border-rose-400 bg-white"}
      onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
    >
      <span className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>Add to Cart</span>
    </button>
  );
}
