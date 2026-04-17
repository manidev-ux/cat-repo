import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, ...props }: Props) {
  return (
    <div>
      {label && <label className="mb-1 block text-white">{label}</label>}

      <input
        {...props}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black outline-none focus:border-purple-500"
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}