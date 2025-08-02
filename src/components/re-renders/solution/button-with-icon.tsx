import React, { type HTMLAttributes, type ReactElement } from "react";

/**
 * variants: "primary" | "secondary" | "ghost"
 * iconLeft?: React.ReactNode
 * iconRight?: React.ReactNode
 * isLoading?: boolean
 * isDisabled?: boolean
 * size: "sm" | "md" | "lg"
 */
type ButtonVariants = "primary" | "secondary" | "ghost";
type ButtonSizes = "sm" | "md" | "lg";
export interface ButtonWithIconProblemSolutionProps {
  isLoading?: boolean;
  variant: ButtonVariants;
  iconLeft?: ReactElement<HTMLAttributes<HTMLElement>, string>;
  iconRight?: ReactElement<HTMLAttributes<HTMLElement>, string>;
  isDisabled?: boolean;
  size: ButtonSizes;
  children: React.ReactNode;
}

export default function ButtonWithIconProblemSolution({
  isLoading,
  children,
  iconLeft,
  iconRight,
  variant,
  size,
}: ButtonWithIconProblemSolutionProps) {
  const variantsClassNames: Record<ButtonVariants, string> = {
    ghost: "border border-current",
    primary: "text-white bg-blue-500",
    secondary: "text-white bg-black",
  };

  const iconSizesClassNames: Record<ButtonSizes, string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const sizesClassNames: Record<ButtonSizes, string> = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const leftIconCloned = iconLeft
    ? React.cloneElement(iconLeft, {
        className: iconSizesClassNames[size],
      })
    : null;

  return (
    <button
      className={`inline-flex items-center py-3 px-6 rounded-full cursor-pointer gap-2 ${variantsClassNames[variant]} ${sizesClassNames[size]}`}
    >
      {leftIconCloned}
      {children}
      {iconRight}
    </button>
  );
}
