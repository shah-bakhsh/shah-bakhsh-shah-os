import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c518] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090a] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#f5c518] px-6 py-3.5 text-black hover:-translate-y-0.5 hover:bg-white",
        outline: "border border-white/20 px-6 py-3.5 text-white/75 hover:border-[#f5c518] hover:text-[#f5c518]",
        ghost: "px-4 py-2 text-white/65 hover:bg-white/5 hover:text-[#f5c518]",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-12 px-7 text-sm",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
