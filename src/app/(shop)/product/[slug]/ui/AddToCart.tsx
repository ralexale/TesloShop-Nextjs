"use client";
import { QuantitySelector, SizeSelector } from "@/components";
import { useState } from "react";
import { Size } from "@/interfaces";

interface Props {
    sizes: Size[];
    inStock: number;
}

export const AddToCart = ({ sizes, inStock }: Props) => {
    const [size, setSize] = useState<Size | undefined>();
    const [quatity, setQuantity] = useState<number>(1);

    return (
        <>
            {/* Selector de tallas */}
            <SizeSelector
                availableSizes={sizes}
                selectedSize={size}
                onSizeChange={setSize}
            />

            {/* Selector de cantidad */}
            <QuantitySelector
                quantity={quatity}
                onQuantityChange={setQuantity}
                inStock={inStock}
            />

            {/* botón  */}
            <button disabled={true} className="btn-primary my-5">
                Agregar al carrito
            </button>

            {/* Descripción */}
        </>
    );
};
