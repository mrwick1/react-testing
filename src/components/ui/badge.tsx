import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-[100px] flex align-center justify-center h-6 text-[10px] font-semibold",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-[primary]/80",
        green:
          "border-transparent bg-[#009545] text-[#ffffff] hover:[#009545]/80",
        blue: "border-transparent bg-[#017DD6] text-[#ffffff] hover:bg-[#017DD6]/80",
        gray: "border-transparent bg-[#BABABA] text-[ #BABABA]-foreground hover:bg-[ #BABABA]/80",
        orange:
          "border-transparent bg-[#FF964A] text-[ #FF964A]-foreground hover:bg-[ #FF964A]/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
