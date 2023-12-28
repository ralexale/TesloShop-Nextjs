import { optionsMenuAdmin } from "@/utils";
import Link from "next/link";

interface Props {
    closeSideMenu: () => void;
}

export const OptionsAdmin = ({ closeSideMenu }: Props) => {
    return (
        <>
            {optionsMenuAdmin.map((option, index) => (
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
            ))}
        </>
    );
};
