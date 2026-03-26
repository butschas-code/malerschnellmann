import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`px-6 py-16 md:px-12 lg:px-24 ${className}`}>
      {children}
    </Tag>
  );
}
