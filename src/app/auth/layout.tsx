import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sesion = await auth();

    if (sesion?.user) {
        redirect("/");
    }

    return (
        <main className="flex justify-center h-screen w-screen  ">
            <div className="w-full    sm:w-[350px] px-10 ">{children}</div>
        </main>
    );
}
