import { auth } from "@/auth.config";
import { Footer, Sidebar, TopMenu } from "@/components";

export default async function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sesion = await auth();
    console.log(sesion);

    return (
        <main className=" min-h-screen">
            <TopMenu />
            <Sidebar />
            <main className="px-0 sm:px-5">{children}</main>
            <Footer />
        </main>
    );
}
