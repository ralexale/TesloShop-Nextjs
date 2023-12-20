"use client";
import { Spinner } from "@/components";
import { useCartStore } from "@/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { currencyFormat } from "../../../../utils/currencyFormat";

export const OrderSummary = () => {
    const [loaded, setLoaded] = useState(false);

    const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
        state.getSummaryInformation()
    );

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <Spinner />;

    itemsInCart === 0 && redirect("/empty");

    return (
        <div className="bg-white rounded-xl  shadow-xl p-7 h-[300px]">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2 ">
                <span>No. Productos</span>
                <span className="text-right">
                    {currencyFormat(itemsInCart)} Artículos
                </span>

                <span>Subtotal</span>
                <span className="text-right">{currencyFormat(subTotal)}</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">{currencyFormat(tax)}</span>

                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-right text-2xl mt-5">
                    {currencyFormat(total)}
                </span>
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
    );
};
