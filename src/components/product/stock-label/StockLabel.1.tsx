"use client";
import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";
import { Props } from "./StockLabel";

export const StockLabel = ({ slug }: Props) => {
    const [stock, setStock] = useState(0);
    const [isLoding, setIsLoading] = useState(true);
    useEffect(() => {
        getStock(slug);
    }, []);

    const getStock = async (slug: string): Promise<void> => {
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setIsLoading(false);
    };

    return (
        <>
            {isLoding ? (
                <h1
                    className={`${titleFont.className} antialiased animate-pulse w-24 bg-slate-200 font-bold text-lg`}
                >
                    &nbsp;
                </h1>
            ) : (
                <h1
                    className={`${titleFont.className} antialiased font-bold text-lg`}
                >
                    Stock: {stock}
                </h1>
            )}
        </>
    );
};
