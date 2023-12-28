import { logout } from "@/actions";
import { optionsMenuUser } from "@/utils";
import Link from "next/link";

interface Props {
    isAuth: boolean;
    closeSideMenu: () => void;
    // user: Session["user"] | null;
    user: any;
}

export const OptionsUser = ({ isAuth, closeSideMenu, user }: Props) => {
    return (
        <>
            {optionsMenuUser.map((option, index) => {
                if (option.title === "Salir") {
                    return (
                        <div key={index}>
                            <button
                                key={option.title}
                                className="flex w-full items-center  p-4 hover:bg-gray-100 rounded transition-colors"
                                onClick={() => logout()}
                            >
                                {option.icon}
                                <span className="ml-3 text-xl">
                                    {option.title}
                                </span>
                            </button>
                            {user?.role === "admin" && (
                                <div className="w-full h-px bg-gray-200 " />
                            )}
                        </div>
                    );
                }

                return (
                    <div key={index}>
                        <Link
                            href={option.href}
                            onClick={closeSideMenu}
                            className="flex items-center  p-4 hover:bg-gray-100 rounded transition-colors"
                        >
                            {option.icon}
                            <span className="ml-3 text-xl">{option.title}</span>
                        </Link>
                    </div>
                );
            })}
        </>
    );
};
