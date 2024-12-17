"use client";

import React from "react";
import { cn } from "../../../../utils/classUtils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
