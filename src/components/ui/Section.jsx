import { cn } from "./cn.js";

export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cn("py-14 sm:py-16", className)}>
      {children}
    </section>
  );
}
