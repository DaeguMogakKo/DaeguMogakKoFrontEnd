import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  text: string;
}

export default function Button({
  text,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="w-full bg-violet-600 py-2 rounded-md" {...rest}>
      {text}
    </button>
  );
}
