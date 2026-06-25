import type { ElementType, ReactNode } from "react";

interface SiteContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function SiteContainer({
  children,
  className = "",
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag className={`site-container${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
