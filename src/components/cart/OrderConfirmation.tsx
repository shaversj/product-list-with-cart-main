import { Cart } from "@/types/cart";

export default function OrderConfirmation({ cart, dispatch, setShowModal }: { cart: Cart; dispatch: any; setShowModal: any }) {
  const cartTotal = cart.products.reduce((acc, item) => acc + item.price * item.quantity!, 0);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const startNewOrderHandler = () => {
    dispatch({ type: "CLEAR_CART" });
    setShowModal(false);
  };

  return (
    <div className={"fixed inset-0 grid h-screen w-screen place-items-center rounded-lg"}>
      <div className={"md:w-[688px] rounded-lg bg-white p-6 lg:w-[592px]"}>
        <img src={"/assets/images/icon-order-confirmed.svg"} alt={"Order Confirmed"} />
        <h1 className={"pt-6 text-[2.5rem] font-bold leading-[120%] text-rose-900"}>Order Confirmed</h1>
        <span className={"font-thin text-rose-500"}>We hope you enjoy your food!</span>

        <div className={"mt-8 divide-y divide-rose-100 rounded-lg bg-brown-bg px-6"}>
          {cart.products?.map((product, idx) => (
            <div key={product.name + idx} className={"flex items-center gap-x-4 pb-4 pt-4"}>
              <img src={product.image.thumbnail} alt={product.name} className={"h-12 w-12"} />
              <div>
                <h3 className={"text-[0.875rem] font-semibold leading-[150%] text-rose-900"}>{product.name}</h3>
                <div className={"flex gap-x-[.5rem] pt-[.5rem]"}>
                  <span className={"text-[0.875rem] leading-[150%] text-red"}>{product.quantity}x &nbsp;</span>
                  <span className={"text-[0.875rem] font-light leading-[150%] text-rose-500"}>@ ${product.price}</span>
                </div>
              </div>
              <div className={"ml-auto"}>
                <span className={"inline-block text-[1rem] font-semibold leading-[150%] text-rose-900"}>
                  {USDollar.format(product.quantity! * product.price)}
                </span>
              </div>
            </div>
          ))}

          <div className={"flex items-center pb-6 pt-6"}>
            <span className={"block text-[0.875rem] leading-[150%] text-rose-900"}>Order Total</span>
            <span className={"ml-auto text-[1.5rem] font-bold leading-[125%] text-rose-900"}>{cart ? USDollar.format(cartTotal) : 0}</span>
          </div>
        </div>

        <div className={"pt-6"}>
          <button className={"w-full rounded-full bg-red py-4 text-white"} onClick={() => startNewOrderHandler()}>
            <span className={"text-[1rem] leading-[150%]"}>Start New Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
