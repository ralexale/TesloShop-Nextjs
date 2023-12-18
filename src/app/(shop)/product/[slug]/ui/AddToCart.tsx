"use client";
import { QuantitySelector, SizeSelector } from "@/components";
import { useState } from "react";
import type { Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import toast, { Toaster } from "react-hot-toast";
import { inter } from "@/config/fonts";

interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {
    const addProductToCart = useCartStore((state) => state.addProductToCart);

    const [size, setSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [posted, setPosted] = useState(false);

    const addToCart = () => {
        setPosted(true);

        if (!size) return;

        addProductToCart({
            size,
            quantity,
            id: product.id,
            title: product.title,
            slug: product.slug,
            image: product.images[0],
            price: product.price,
            inStock: product.inStock,
        });

        setPosted(false);
        setQuantity(1);
        setSize(undefined);
        toast.success("Producto agregado correctamente!", {
            className: `${inter.className}`,
        });
    };

    return (
        <>
            {posted && !size && (
                <span className="mt-2 text-red-500 fade-in">
                    * Debe de Selecionar una talla *
                </span>
            )}

            {/* Selector de tallas */}
            <SizeSelector
                availableSizes={product?.sizes}
                selectedSize={size}
                onSizeChange={setSize}
            />

            {/* Selector de cantidad */}
            <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                inStock={product?.inStock}
            />

            {/* botón  */}
            <button onClick={addToCart} className="btn-primary my-5">
                Agregar al carrito
            </button>
            <Toaster position="bottom-right" />
        </>
    );
};
