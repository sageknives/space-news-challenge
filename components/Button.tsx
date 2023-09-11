import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "text";
};

export function Button({ className, variant = "text", ...rest }: ButtonProps) {
  return (
    <button
      className={`${
        className ?? ""
      }   hover:text-green-700 disabled:cursor-not-allowed disabled:font-extralight disabled:hover:text-current`}
      {...rest}
    />
  );
}
