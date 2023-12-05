import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";


const productsInCard = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];


export default function CartPage() {


  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href={'/'} className="underline mb-5">Continúa comprando</Link>
          </div>


          {/* Items */}
          {
            productsInCard.map(product => (
              <div key={product.slug} className="flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="object-cover mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <span>${product.price}</span>
                  <QuantitySelector quantity={2} />
                </div>
              </div>
            ))
          }

          {/* Checkout */}

        </div>



      </div>
    </section>
  );
}