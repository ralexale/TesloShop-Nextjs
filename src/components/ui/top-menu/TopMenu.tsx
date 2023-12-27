"use client";
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useCartStore, useUiStore } from "@/store";
import { useState, useEffect } from "react";
import { genreLabels } from "@/lib";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export const TopMenu = () => {
    const openSideMenu = useUiStore((state) => state.openSideMenu);
    const TotalItemsInCart = useCartStore((state) => state.getTotalItems());

    const pathName = usePathname().split("/").pop();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            {/* logo */}
            <div>
                <Link href={"/"}>
                    <span
                        className={` ${titleFont.className} font-bold antialiased`}
                    >
                        Teslo
                    </span>
                    <span> | Shop</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                {genreLabels.map((genre) => (
                    <Link
                        key={genre.label}
                        className={clsx(
                            "m-2 p-2 rounded-md transition-all hover:bg-gray-100",
                            {
                                "bg-gray-200 ": pathName == genre.url,
                            }
                        )}
                        href={`/gender/${genre.url}`}
                    >
                        {genre.label}
                    </Link>
                ))}
            </div>

            {/* Search , Cart , Menu  */}
            <div className="flex items-center">
                <Link href="/search" className="mx-2 ">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>

                <Link
                    href={TotalItemsInCart === 0 && loaded ? "/empty" : "/cart"}
                    className="mx-2"
                >
                    <div className="relative">
                        {loaded && TotalItemsInCart > 0 && (
                            <span className="absolute fade-in text-xs rounded-full fade-in text-white px-1 -right-2 font-bold -top-2 bg-blue-500">
                                {TotalItemsInCart}
                            </span>
                        )}

                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    onClick={openSideMenu}
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Menú
                </button>
            </div>
        </nav>
    );
};
