import { LoginForm } from "./ui/LoginForm";

export const metadata = {
    title: "Login",
    description: "Login",
};

export default function LoginPage() {
    return (
        <section className="flex flex-col min-h-screen pt-32 sm:pt-52">
            <LoginForm />
        </section>
    );
}
