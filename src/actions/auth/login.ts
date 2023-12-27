"use server";

import { signIn } from "@/auth.config";
import { sleep } from "@/utils";
import { AuthError } from "next-auth";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn("credentials", {
            ...Object.fromEntries(formData),
            redirect: false,
        });

        return "Success";
    } catch (error) {
        if ((error as any).type === "CredentialsSignin") {
            return "CredentialsSignin";
        }

        // if (error instanceof AuthError) {
        //     switch (error.type) {
        //         case "CredentialsSignin":
        //             return "Invalid credentials.";
        //         default:
        //             return "Something went wrong.";
        //     }
        // }
        // throw error;

        return "UnknowError";
    }
}
