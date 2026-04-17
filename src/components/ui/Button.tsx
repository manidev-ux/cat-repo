import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full rounded-md bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700"
    >
      {children}
    </button>
  );
}