"use client";

import {
    IoCloseOutline,
    IoLogInOutline,
    IoSearchOutline,
} from "react-icons/io5";
import clsx from "clsx";

import { useUiStore } from "@/store";
import { OptionsUser } from "./OptionsUser";
import { OptionsAdmin } from "./OptionsAdmin";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Sidebar = () => {
    const { isSideMenuOpen, closeSideMenu } = useUiStore();

    const { data: session } = useSession();
    const isAuthenticated = !!session?.user;

    console.log(isAuthenticated);

    return (
        <aside>
            {isSideMenuOpen && (
                // background black and blur
                <div
                    className="fixed fade-in bg-black/30 backdrop-blur-sm  h-screen w-screen top-0 z-10"
                    onClick={closeSideMenu}
                />
            )}

            {/* SideMenu */}
            <nav
                // todo: efecto de slide
                className={clsx(
                    "fixed p-5 right-0 top-0 w-4/5 sm:w-1/2 lg:w-1/3 flex flex-col gap-5  h-screen bg-white z-20 shadow-2xl transform transition-all duration-200",
                    { "translate-x-full": !isSideMenuOpen }
                )}
            >
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}
                />

                {/* input */}
                <div className="relative mt-14 flex items-center">
                    <IoSearchOutline size={20} className="absolute left-2" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-3 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-400"
                    />
                </div>

                {/* Opciones del Menú */}

                {isAuthenticated ? (
                    <OptionsUser
                        closeSideMenu={closeSideMenu}
                        user={session?.user}
                        isAuth={isAuthenticated}
                    />
                ) : (
                    <Link
                        href="/auth/login"
                        onClick={closeSideMenu}
                        className="flex items-center  p-4 hover:bg-gray-100 rounded transition-colors"
                    >
                        <IoLogInOutline size={30} />
                        <span className="ml-3 text-xl">Ingresar</span>
                    </Link>
                )}

                {/* opciones del admin  */}
                {session?.user?.role === "admin" && (
                    <OptionsAdmin closeSideMenu={closeSideMenu} />
                )}
            </nav>
        </aside>
    );
};
