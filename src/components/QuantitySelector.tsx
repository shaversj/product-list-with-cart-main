export default function QuantitySelector({
  addQuantity,
  removeQuantity,
  quantity,
}: {
  addQuantity: () => void;
  removeQuantity: () => void;
  quantity: number;
}) {
  return (
    <div
      className={
        "absolute -bottom-[8%] left-1/2 flex h-[2.75rem] w-[10rem] -translate-x-1/2 transform items-center justify-center rounded-full border border-rose-400 bg-red"
      }
    >
      <button className={"mr-auto pl-3"} onClick={() => removeQuantity()}>
        <img src={"/assets/images/icon-subtract.svg"} alt={"Subtract to Cart"} className={"inline-block"} />
      </button>
      <span className={"text-[0.875rem] font-semibold leading-[150%] text-white"}>{quantity}</span>
      <button className={"ml-auto pr-3"} onClick={() => addQuantity()}>
        <img src={"/assets/images/icon-add.svg"} alt={"Add to Cart"} className={"inline-block"} />
      </button>
    </div>
  );
}
