import { CheckoutSummary, ProductsSumary, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";

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
            <Link href={"/cart"} className="underline mb-5">
              Editar Carrito
            </Link>

            {/* Items */}
            <ProductsSumary products={productsInCard} />
          </div>

          {/* Checkout - Resumen de Orden */}
          <CheckoutSummary />
        </div>
      </div>
    </section>
  );
}
