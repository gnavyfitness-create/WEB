import React from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
  // Añadimos esta línea para que acepte el tipo de botón nativo
  type?: 'button' | 'submit' | 'reset'; 
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external,
  onClick,
  type = 'button', // Valor por defecto
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-[#0F2F57] text-white hover:bg-[#0A223F] shadow-sm',
    secondary: 'bg-[#C9A35A] text-white hover:bg-[#b08d4a] shadow-sm',
    outline: 'border-2 border-[#0F2F57] text-[#0F2F57] hover:bg-[#0F2F57] hover:text-white',
    ghost: 'text-[#0F2F57] hover:bg-[#F7F4EE]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg tracking-wide',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} // Pasamos la prop al elemento nativo
      className={combinedClasses} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}