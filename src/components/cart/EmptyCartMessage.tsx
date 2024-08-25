export default function EmptyCartMessage() {
  return (
    <div className={"flex flex-col items-center justify-center pb-10 pt-[2.5rem]"}>
      <img src={"/assets/images/illustration-empty-cart.svg"} alt={"Empty Cart"} className={"h-[8rem] w-[8rem]"} />
      <span className={"inline-block pt-4 text-[0.875rem] font-semibold text-rose-500"}>Your added items will appear here</span>
    </div>
  );
}
