"use client";
import { motion } from "framer-motion";
import { useFormState } from "react-dom";
import Link from "next/link";

import { authenticate } from "@/actions";
import { titleFont } from "@/config/fonts";

export const NewAccountForm = () => {
    const [state, dispatch] = useFormState(authenticate, undefined);

    console.log({ state });

    return (
        <>
            <motion.form
                action={dispatch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
            >
                <h1 className={`${titleFont.className} text-4xl mb-5`}>
                    Crear cuenta
                </h1>

                <div className="flex flex-col">
                    <label htmlFor="name">Nombre completo</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="text"
                        placeholder="Ingresa tu nombre"
                    />

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="email"
                    />

                    <label htmlFor="email">Contraseña</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="email"
                    />

                    <button type="submit" className="btn-primary">
                        Ingresar
                    </button>

                    {/* divisor l ine */}
                    <div className="flex items-center my-5">
                        <div className="flex-1 border-t border-gray-500"></div>
                        <div className="px-2 text-gray-800">O</div>
                        <div className="flex-1 border-t border-gray-500"></div>
                    </div>

                    <Link
                        href="/auth/login"
                        className="btn-secondary text-center"
                    >
                        Login
                    </Link>
                </div>
            </motion.form>
        </>
    );
};
