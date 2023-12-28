export interface InputsData {
    type: "text" | "email" | "password";
    name: "name" | "email" | "password";
    label: string;
    error?: string;
    placeholder: string;
    patter?: RegExp;
}

export const inputsData: InputsData[] = [
    {
        type: "text",
        name: "name",
        label: "Nombre completo",
        placeholder: "ingresa tu nombre",
        error: "* El nombre es obligatorio",
    },
    {
        type: "email",
        name: "email",
        label: "Correo electrónico",
        placeholder: "ingresa tun correo",
        error: "*  El correo es obligatorio",
    },
    {
        type: "password",
        name: "password",
        label: "Contraseña",
        placeholder: "ingresa un contraseña",
        error: `* La contraseña debe tener minimo 8 caracteres una
    mayuscula un numero y un caracter especial`,
        patter: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    },
];
