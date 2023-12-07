'use client'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from 'react';

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(1)

    const onQuantityChange = (value: number) => {
        if (count + value > quantity) return
        if (count + value < 1) return

        setCount(count + value)
    }

    return (
        <div className="flex items-center">
            <button onClick={() => onQuantityChange(-1)}><IoRemoveCircleOutline size={30} /></button>

            <span className="w-20 mx-5 py-1 px-5 rounded bg-gray-200 text-center"> {count}</span>

            <button onClick={() => onQuantityChange(1)}><IoAddCircleOutline size={30} /></button>
        </div>
    )
}