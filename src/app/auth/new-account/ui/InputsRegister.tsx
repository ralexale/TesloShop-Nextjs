import { FormInputs } from "@/interfaces";
import { inputsData } from "@/utils";
import clsx from "clsx";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<FormInputs>;
    errors: FieldErrors<FormInputs>;
}

export const InputsRegister = ({ register, errors }: Props) => {
    return (
        <>
            {inputsData.map((input) => (
                <div key={input.name} className="flex flex-col gap-2">
                    <label className="text-left" htmlFor={input.name}>
                        {input.label}
                    </label>
                    <input
                        className={clsx(
                            "px-5 py-2 transition-all  focus:outline-blue-500 outline-none bg-gray-200 rounded",
                            {
                                "focus:outline-red-500": errors[input.name],
                            }
                        )}
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.name, {
                            required: true,
                            pattern: input.patter,
                        })}
                    />

                    {(errors[input.name]?.type === "required" ||
                        errors[input.name]?.type === "pattern") && (
                        <span className="text-red-500 fade-in text-sm">
                            {input.error}
                        </span>
                    )}
                </div>
            ))}
        </>
    );
};
