import type { ReactNode } from "react";

interface SiteContainerProps {
  children: ReactNode;
  className?: string;
}

export function SiteContainer({ children, className = "" }: SiteContainerProps) {
  return (
    <div className={`site-container${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
