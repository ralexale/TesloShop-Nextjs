import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoTrashOutline } from "react-icons/io5";

const productsInCard = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckOutPage() {
  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col  mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href={"/"} className="underline mb-5">
              Editar Carrito
            </Link>

            {/* Items */}
            {productsInCard.map((product) => (
              <div key={product.slug} className="flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  height={100}
                  className="object-cover mr-5 mb-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <span>${product.price} x 3 </span>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  <div className="flex gap-3"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de Orden */}

          <div className="bg-white  rounded-xl  shadow-xl p-7">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2 ">
              <span>No. Productos</span>
              <span className="text-right">3 Artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5 ">Total</span>
              <span className="text-right text-2xl mt-5">$ 200</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href={"/checkout/address"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
