import {desserts} from "@/constants/store-items";
import Image from "next/image";

export default function Home() {
  return (

    <main className="bg-rose-50">
        <div className={"w-[50rem] min-h-screen mx-auto font-red-hat-text"}>
            <h1 className={"text-[3.5rem] leading-[120%] text-rose-900 font-bold justify-self-start pt-[5.5rem]"}>Desserts</h1>

            <div className={"flex items-center justify-center"}>
                <section className={"grid grid-cols-3 gap-x-6 pt-8 gap-y-8"}>
                    {desserts.map((dessert) => (
                        <div key={dessert.name} className="flex flex-col items-start">
                            <div className={"relative w-[250.67px] h-[240px]"}>
                                <Image className={"rounded-lg"} src={dessert.image.desktop} alt={dessert.name}
                                       width={250.67} height={240}/>
                                <button
                                    className={"absolute bg-white -bottom-[8%] left-1/2 transform  -translate-x-1/2 w-[160px] h-[44px] rounded-full border border-rose-400"}><span
                                    className={"text-rose-900 text-[0.875rem] leading-[150%] font-semibold"}>Add to Cart</span>
                                </button>

                            </div>

                            <h2 className={"text-rose-500 text-[0.875rem] leading-[150%] pt-[2.375rem]"}>{dessert.name}</h2>
                            <p className={"text-rose-900 text-[0.875rem] leading-[150%] font-semibold"}>{dessert.category}</p>
                            <p className={"text-red text-[1rem] leading-[150%] font-semibold"}>${dessert.price}</p>
                        </div>
                    ))}
                </section>

            </div>

        </div>


    </main>
  );
}
