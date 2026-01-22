import { cn } from "./cn.js";

const VARIANTS = {
  primary:
    "bg-brand-primary text-white hover:opacity-95 focus:ring-brand-primary/40",
  secondary:
    "bg-white/70 text-brand-text border border-black/10 hover:bg-white focus:ring-brand-primary/40",
  ghost:
    "bg-transparent text-brand-text hover:bg-white/70 border border-black/10 focus:ring-brand-primary/40"
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold shadow-soft",
        "focus:outline-none focus:ring-2",
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
