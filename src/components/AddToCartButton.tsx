export default function AddToCartButton({ addToCart }: { addToCart: () => void }) {
  return (
    <button
      className={"absolute -bottom-[8%] left-1/2 h-[2.75rem] w-[10rem] -translate-x-1/2 transform rounded-full border border-rose-400 bg-white"}
      onClick={() => addToCart()}
    >
      <span className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>Add to Cart</span>
    </button>
  );
}
