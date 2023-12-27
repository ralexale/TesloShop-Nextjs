import {
    IoLogInOutline,
    IoLogOutOutline,
    IoPeopleOutline,
    IoPersonOutline,
    IoShirtOutline,
    IoTicketOutline,
} from "react-icons/io5";

interface OptionsMenuData {
    icon: React.ReactNode;
    title: string;
    href: string;
}

export const optionsMenuData: OptionsMenuData[] = [
    { icon: <IoPersonOutline size={30} />, title: "Perfil", href: "/profile" },
    { icon: <IoTicketOutline size={30} />, title: "Ordenes", href: "/orders" },
    {
        icon: <IoLogInOutline size={30} />,
        title: "Ingresar",
        href: "/auth/login",
    },
    {
        icon: <IoLogOutOutline size={30} />,
        title: "Salir",
        href: "/auth/login",
    },
    {
        icon: <IoShirtOutline size={30} />,
        title: "Productos",
        href: "/products",
    },
    { icon: <IoTicketOutline size={30} />, title: "Ordenes", href: "/orders" },
    {
        icon: <IoPeopleOutline size={30} />,
        title: "Usuarios",
        href: "/profile",
    },
];
