import Link from "next/link"

export const CartSummary = () => {
    return (
        <div className="bg-white rounded-xl  shadow-xl p-7 h-[300px]">
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
    )
}