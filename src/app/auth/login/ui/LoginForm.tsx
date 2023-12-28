"use client";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { IoInformationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
// import { useRouter } from "next/navigation";
import Link from "next/link";

import { authenticate } from "@/actions";
import { titleFont } from "@/config/fonts";

export const LoginForm = () => {
    const [state, dispatch] = useFormState(authenticate, undefined);

    // const router = useRouter();
    useEffect(() => {
        // state === "Success" && router.push("/");

        if (state === "Success") {
            //* si lo hacemos de esta manera vamos a recargar el navegador
            window.location.replace("/");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <>
            <motion.form
                action={dispatch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
            >
                <h1 className={`${titleFont.className} text-4xl mb-5 `}>
                    Ingresar
                </h1>

                <div className="flex flex-col ">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            className="px-5 py-2 border bg-gray-200 rounded mb-5"
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            className="px-5 py-2 border bg-gray-200 rounded mb-5"
                            type="password"
                            name="password"
                        />
                    </div>

                    {state === "CredentialsSignin" && (
                        <div
                            className="flex h-8 mb-4 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <>
                                <IoInformationOutline className="h-5 w-5 text-red-500" />
                                <p className="text-sm text-red-500 fade-in">
                                    Las Credenciales no so correctas
                                </p>
                            </>
                        </div>
                    )}

                    <LoginButton />

                    {/* divisor line */}
                    <div className="flex items-center my-5">
                        <div className="flex-1 border-t border-gray-500"></div>
                        <div className="px-2 text-gray-800">O</div>
                        <div className="flex-1 border-t border-gray-500"></div>
                    </div>

                    <Link
                        href="/auth/new-account"
                        className="btn-secondary text-center"
                    >
                        Crear una nueva cuenta
                    </Link>
                </div>
            </motion.form>
        </>
    );
};

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className={` ${
                pending ? "btn-disabled" : "btn-primary"
            } text-center flex items-center justify-center`}
        >
            {pending ? (
                <CgSpinnerTwoAlt className="animate-spin font-bold text-2xl" />
            ) : (
                " Ingresar"
            )}
        </button>
    );
}
