import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) redirect("/");
    return (
        <div className="min-h-[85vh] flex flex-col ">
            <Title title="Perfil" className="self-start" />

            <pre className="text-2xl">
                {JSON.stringify(session.user, null, 2)}
            </pre>

            <h3 className="text-5xl">{session.user.role}</h3>
        </div>
    );
}
