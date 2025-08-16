"use client"

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
  id?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
  id
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    outline: 'border border-gray-300 text-white hover:bg-gray-800 focus:ring-gray-300'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link 
        href={href} 
        className={styles}
        target={target}
        rel={rel}
        id={id}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={styles} 
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}