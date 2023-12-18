"use client";
import type { Size } from "@/interfaces";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
    selectedSize?: Size;
    availableSizes: Size[]; // ['S','L','M','X']
    onSizeChange: (size: Size) => void; // (size: 'S') => void;
}

export const SizeSelector = ({
    selectedSize,
    availableSizes,
    onSizeChange,
}: Props) => {
    const [preIndex, setPrevIndex] = useState<number>(-1);
    const currentIndexSize = availableSizes.findIndex(
        (item) => item === selectedSize
    );

    const trasnlateValue = {
        x: preIndex > currentIndexSize ? "100%" : "-100%",
    };

    const handleSizeChange = (size: Size) => {
        const prevIndex = availableSizes.findIndex(
            (item) => item === selectedSize
        );
        setPrevIndex(prevIndex);
        onSizeChange(size);
    };

    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles</h3>

            <div className="flex w-full">
                {availableSizes?.map((size) => (
                    <button
                        key={size}
                        onClick={() => handleSizeChange(size)}
                        className={clsx("mx-2 relative overflow-clip text-lg")}
                    >
                        {size}
                        <AnimatePresence>
                            {size === selectedSize && (
                                <motion.div
                                    initial={{ x: trasnlateValue.x }}
                                    animate={{ x: 0 }}
                                    exit={trasnlateValue}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className=" left-0 absolute bottom-0 bg-slate-950 h-[2px] rounded-lg w-full  inline-block"
                                />
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>
        </div>
    );
};
