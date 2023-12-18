"use client";
import { IoTrashOutline } from "react-icons/io5";
import { QuantitySelector } from "@/components";
import Image from "next/image";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const ProductsInCart = () => {
    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore((state) => state.cart);
    const updateProductQuantity = useCartStore(
        (state) => state.updateProductQuantity
    );
    const removeProductInCart = useCartStore((state) => state.removeProduct);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) {
        return (
            <section className="min-h-[80svh] grid place-items-center">
                <div
                    className="w-12 h-12 rounded-full animate-spin
                    border-4  border-solid border-gray-700 border-t-transparent"
                ></div>
            </section>
        );
    }

    return (
        <AnimatePresence>
            {productsInCart.map((product) => (
                <motion.div
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.3, ease: "backInOut" }}
                    key={`${product.slug}-${product.size}`}
                    className="flex transition-all "
                >
                    <Image
                        src={`/products/${product.image}`}
                        alt={product.title}
                        width={100}
                        style={{
                            width: "100px",
                            height: "100px",
                        }}
                        height={100}
                        className="object-cover mr-5 mb-5 rounded"
                    />
                    <div className="flex flex-col">
                        <Link
                            href={`product/${product.slug}`}
                            className="font-semibold w-[260px] truncate hover:text-blue-500 hover:underline mb-1 transition-colors"
                        >
                            {product.size} - {product.title}
                        </Link>

                        <span>${product.price}</span>
                        <div className="flex gap-3">
                            <QuantitySelector
                                quantity={product.quantity}
                                inStock={product.inStock}
                                onQuantityChange={(value) =>
                                    updateProductQuantity(product, value)
                                }
                            />
                            <button
                                className="underline bg-red-500 p-2 rounded "
                                onClick={() => removeProductInCart(product)}
                            >
                                <IoTrashOutline
                                    className="text-white"
                                    size={20}
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};
