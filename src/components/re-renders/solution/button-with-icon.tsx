import { cn } from "@/lib/utils";
import React, {
  type ComponentProps,
  type HTMLAttributes,
  type ReactElement,
} from "react";

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
export interface ButtonWithIconProblemSolutionProps
  extends ComponentProps<"button"> {
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
  isDisabled,
  className,
  ...props
}: ButtonWithIconProblemSolutionProps) {
  const variantsClassNames: Record<ButtonVariants, string> = {
    ghost: "border border-current",
    primary: "text-white bg-blue-500",
    secondary: "text-white bg-black",
  };

  const iconVariantsClassNames: Record<ButtonVariants, string> = {
    ghost: "stroke-current",
    primary: "stroke-white",
    secondary: "stroke-white",
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

  const loadingSizeClassNames: Record<ButtonSizes, string> = {
    sm: "size-5 border",
    md: "size-6 border",
    lg: "size-8",
  };

  const { className: iconLeftClassName, ...iconLeftOtherProps } =
    iconLeft?.props || {};

  // const iconLeftPropsDemo = {
  //   className: "",
  //   abc: "",
  //   xyz: ""
  // }
  // const {className, ...otherProps} = iconLeftPropsDemo;
  // {abc: "", xyz: ""}

  const iconLeftCloned = iconLeft
    ? React.cloneElement(iconLeft, {
        className: cn(
          iconSizesClassNames[size],
          iconVariantsClassNames[variant],
          iconLeftClassName
        ),
        ...iconLeftOtherProps,
      })
    : null;

  const loading = (
    <div
      className={cn(
        "size-10 rounded-full border-4 border-current border-y-transparent animate-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [&~*]:opacity-0 [&~*]:invisible",
        loadingSizeClassNames[size]
      )}
    ></div>
  );

  return (
    <button
      className={cn(
        "flex items-center py-3 px-6 rounded-full cursor-pointer gap-2 disabled:cursor-not-allowed relative disabled:opacity-50",
        variantsClassNames[variant],
        sizesClassNames[size],
        className
      )}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && loading}
      {iconLeftCloned}
      {children}
      {iconRight}
    </button>
  );
}
