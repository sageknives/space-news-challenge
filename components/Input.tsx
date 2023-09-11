import { InputHTMLAttributes } from "react";

export function Input({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${
        className ?? ""
      } w-96 border-2 border-black px-2 py-1 outline-offset-0`}
      {...rest}
    />
  );
}
