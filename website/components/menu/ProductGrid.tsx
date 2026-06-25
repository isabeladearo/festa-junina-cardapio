import type { ReactNode } from "react";

interface ProductGridProps {
  children: ReactNode;
}

export function ProductGrid({ children }: ProductGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-2.5">
      {children}
    </ul>
  );
}
