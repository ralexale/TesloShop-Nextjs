"use client";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

interface Props {
    quantity: number;
    onQuantityChange: (count: number) => void;
    inStock: number;
}

export const QuantitySelector = ({
    quantity,
    inStock,
    onQuantityChange,
}: Props) => {
    const [animate, setAnimate] = useState(false);
    const [togglePrev, setTogglePrev] = useState<number>(0);

    const onValueChange = (value: number) => {
        if (quantity + value > inStock || quantity + value < 1) return;
        setAnimate(true);

        value === 1 ? setTogglePrev(30) : setTogglePrev(-30);

        setTimeout(() => {
            onQuantityChange(quantity + value);
        }, 100);
        setTimeout(() => {
            setAnimate(false);
        }, 200); // Change this value to match your animation duration
    };

    return (
        <div className="flex items-center">
            <button onClick={() => onValueChange(-1)}>
                <IoRemoveCircleOutline
                    size={30}
                    className="hover:text-red-600 transition-colors duration-200"
                />
            </button>

            <div className="w-20 mx-5 py-1 px-5 flex h-8 flex-col rounded bg-gray-200 overflow-clip  text-center">
                <AnimatePresence>
                    {animate && (
                        <motion.span
                            key="quantity"
                            animate={{ opacity: 0, y: togglePrev }}
                            exit={{ opacity: 1, y: [-togglePrev, 0] }}
                            transition={{ duration: 0.2, ease: "backInOut" }}
                        >
                            {quantity}
                        </motion.span>
                    )}
                </AnimatePresence>
                {!animate && <span>{quantity}</span>}
            </div>

            <button onClick={() => onValueChange(1)}>
                <IoAddCircleOutline
                    size={30}
                    className="hover:text-blue-600 transition-colors duration-200"
                />
            </button>
        </div>
    );
};
