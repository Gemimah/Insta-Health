"use client";

import React from "react";
import { cn } from "../../../../utils/classUtils";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: "small" | "medium" | "large";
  id: string;
}

export const Switch: React.FC<SwitchProps> = ({
  size = "medium",
  id,
  checked,
  onChange,
  ...props
}) => {
  const sizes = {
    small: "h-4 w-8",
    medium: "h-6 w-12",
    large: "h-8 w-16",
  };

  return (
    <div className={cn("relative inline-block", sizes[size])}>
      <input
        type="checkbox"
        id={id}
        className={cn(
          "peer sr-only",
          sizes[size] // Accessibility-hidden input element
        )}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span
        className={cn(
          "absolute inset-0 rounded-full bg-gray-200 transition peer-checked:bg-blue-500 dark:bg-gray-700 dark:peer-checked:bg-blue-600"
        )}
      />
      <span
        className={cn(
          "absolute left-1 top-1 h-2/3 w-2/3 rounded-full bg-white transition peer-checked:translate-x-full"
        )}
      />
    </div>
  );
};
