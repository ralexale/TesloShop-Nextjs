"use client";
import { useCartStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CartSummary = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const prodcutsInCart = useCartStore((state) => state.cart);
    const totalProducts = useCartStore((state) => state.getTotalItems());

    useEffect(() => {
        const subTotal = prodcutsInCart.reduce(
            (prev, current) => prev + current.price,
            0
        );
        setTotalPrice(subTotal);
    }, [prodcutsInCart]);

    return (
        <div className="bg-white rounded-xl  shadow-xl p-7 h-[300px]">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2 ">
                <span>No. Productos</span>
                <span className="text-right">{totalProducts} Artículos</span>

                <span>Subtotal</span>
                <span className="text-right">$ {totalPrice}</span>

                <span>Impuestos (15%)</span>
                <span className="text-right">$ {totalPrice * 0.15}</span>

                <span className="text-2xl mt-5 ">Total</span>
                <span className="text-right text-2xl mt-5">
                    $ {totalPrice * 1.15}
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
