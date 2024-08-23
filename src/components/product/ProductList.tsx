import { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";
import { Cart } from "@/types/cart";

export default function ProductList({ products, cart, dispatch }: { products: Product[]; cart: Cart; dispatch: any }) {
  return (
    <div className={"md:grid-cols-3 md:gap-x-6 lg:row-start- grid gap-y-8 pt-8 lg:w-[50rem]"}>
      {products.map((dessert) => (
        <ProductCard product={dessert} key={dessert.name} cart={cart} dispatch={dispatch} />
      ))}
    </div>
  );
}
