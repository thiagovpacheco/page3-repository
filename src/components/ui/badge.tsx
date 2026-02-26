import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors",
    {
        variants: {
            variant: {
                default: "border-transparent bg-white text-black",
                secondary: "border-transparent bg-white/10 text-white",
                destructive: "border-transparent bg-red-600 text-white",
                outline: "border-white/20 text-white/80",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, ...props }, ref) => (
        <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
    )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
export type { BadgeProps };
