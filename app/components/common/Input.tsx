import { InputHTMLAttributes } from "react";
import {
  Control,
  FieldValue,
  UseFormRegister,
  UseFormRegisterReturn,
  useController,
} from "react-hook-form";

interface InputProps {
  error?: string;
  name: string;
  label: string;
  register: UseFormRegisterReturn;
}

export default function Input({
  error,
  name,
  label,
  register,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2 shadow-sm">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        id={name}
        {...register}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 dark:ring-neutral-200 ring-gray-300 focus:ring-violet-700 border-none placeholder:text-neutral-400 transition-shadow px-3"
        {...rest}
      />
      {error && <span className="text-red-500 font-medium">{error}</span>}
    </div>
  );
}
