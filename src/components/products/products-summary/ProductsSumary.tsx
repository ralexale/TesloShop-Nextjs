"use client";
import { useCartStore } from "@/store";

import Image from "next/image";

export const ProductsSumary = () => {
    const productsInCart = useCartStore((state) => state.cart);

    return (
        <>
            {" "}
            {productsInCart.map((product) => (
                <div key={product.slug} className="flex">
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
                    <div>
                        <p>{product.title}</p>
                        <span>${product.price} x 3 </span>
                        <p className="font-bold">
                            Subtotal: ${product.price * 3}
                        </p>
                        <div className="flex gap-3"></div>
                    </div>
                </div>
            ))}
        </>
    );
};
