import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}