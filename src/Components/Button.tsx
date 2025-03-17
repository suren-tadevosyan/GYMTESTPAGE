import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function Button({ label, className, onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 text-lg font-semibold transition-all duration-300 flex items-center gap-2 ${className}`}
    >
      {label}
      {icon && <span>{icon}</span>}
    </button>
  );
}