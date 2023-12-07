import clsx from "clsx"
import Link from "next/link"
import { IoCardOutline } from "react-icons/io5"

interface Props {
    isOrderPage?: boolean
}

export const CheckoutSummary = ({ isOrderPage }: Props) => {
    return (
        <div className="bg-white  rounded-xl  shadow-xl p-7">

            <h2 className="text-2xl mb-2 font-semibold">Dirección de entrega</h2>
            <div className="mb-6 flex flex-col gap-1">
                <p className="text-xl">Hector Alejandro</p>
                <p className="text-xl">Av. Siempre viva 123</p>
                <p>Col. Centro</p>
                <p>Alcaldiá Cauhtemoc</p>
                <p>Ciudad de México</p>
            </div>

            {/* divider  */}
            <div className="w-full border mb-6 rounded" />

            {/* Resmen de orden */}
            <h2 className="text-2xl mb-2 font-semibold">Resumen de orden</h2>
            <div className="grid grid-cols-2 ">
                <span>No. Productos</span>
                <span className="text-right">3 Artículos</span>

                <span>Subtotal</span>
                <span className="text-right">$ 100</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$ 100</span>

                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-right text-2xl font-bold mt-5">$ 200</span>
            </div>

            <div className="mt-5 mb-2 w-full">

                <p className="mb-5">
                    {/* disclaimer */}
                    <span className="text-xs">
                        {/*  eslint-disable-next-line react/no-unescaped-entities */}
                        Al hacer click en "Colocar Orden", aceptas nuestros{" "}
                        <a href="#" className="underline">Términos y condiciones</a>
                        {" "}y{" "}
                        <a href="#" className="underline">política de privacidad</a>
                    </span>
                </p>

                {
                    isOrderPage ?
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
                        :
                        <Link
                            className="flex btn-primary justify-center"
                            href={"/orders/123"}
                        >
                            Colocar Orden
                        </Link>
                }
            </div>
        </div>
    )
}