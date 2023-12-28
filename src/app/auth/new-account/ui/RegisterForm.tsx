"use client";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

import { FormInputs } from "@/interfaces";
import { login, registerUser } from "@/actions";
import { titleFont } from "@/config/fonts";
import { InputsRegister } from "./InputsRegister";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const { name, email, password } = data;

        //server action
        const res = await registerUser(name, email, password);

        if (!res.ok) {
            toast.error(res.message);
            return;
        }
        await login(email.toLowerCase(), password);
        toast.success("Usuario creado con exito");
        setTimeout(() => {
            window.location.replace("/");
        }, 2000);
    };

    return (
        <>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="text-center flex flex-col gap-3 "
            >
                <h1 className={`${titleFont.className} text-4xl mb-5`}>
                    Crear cuenta
                </h1>

                {/* inputs del formularo */}
                <InputsRegister register={register} errors={errors} />

                <button type="submit" className="btn-primary">
                    Ingresar
                </button>

                {/* divisor line */}
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t border-gray-500"></div>
                    <div className="px-2 text-gray-800">O</div>
                    <div className="flex-1 border-t border-gray-500"></div>
                </div>

                <Link href="/auth/login" className="btn-secondary text-center">
                    Login
                </Link>
            </motion.form>
            <Toaster position="top-center" />
        </>
    );
};
