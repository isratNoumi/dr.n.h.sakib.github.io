import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1a1a2e] mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
