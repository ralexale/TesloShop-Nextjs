import { CheckoutSummary, ProductsSumary, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCard = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];



interface Props {
  params: { id: string }
}

export default function OrdesByIdPage({ params }: Props) {
  const { id } = params;
  // todo: verificar id 
  // redirect('/')

  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">

        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col  mt-5">
            <div className={
              clsx("flex items-center rounded-lg  py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true
                }
              )
            }>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Orden pagada</span>
            </div>
            {/* Items */}
            <ProductsSumary products={productsInCard} />
          </div>

          {/* Checkout - Resumen de Orden */}
          <CheckoutSummary isOrderPage />
        </div>
      </div>
    </section>
  );
}
