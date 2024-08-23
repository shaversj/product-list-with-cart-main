export default function CartHeader({ numberOfCartItems }: { numberOfCartItems: number }) {
  return <h2 className={"text-[1.5rem] font-bold leading-[125%] text-red"}>Your Cart ({numberOfCartItems})</h2>;
}
