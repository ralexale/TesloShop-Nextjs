'use client'
import Link from "next/link"
import { motion } from 'framer-motion';
import { titleFont } from "@/config/fonts";

export const FormLogin = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, ease: "easeIn" }}
            >
                <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

                <div className="flex flex-col">

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="email" />


                    <label htmlFor="email">Contraseña</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="email" />

                    <button

                        className="btn-primary">
                        Ingresar
                    </button>


                    {/* divisor line */}
                    <div className="flex items-center my-5">
                        <div className="flex-1 border-t border-gray-500"></div>
                        <div className="px-2 text-gray-800">O</div>
                        <div className="flex-1 border-t border-gray-500"></div>
                    </div>

                    <Link
                        href="/auth/new-account"
                        className="btn-secondary text-center">
                        Crear una nueva cuenta
                    </Link>
                </div>
            </motion.div>
        </>
    )
}