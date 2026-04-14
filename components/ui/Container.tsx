import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper simple para clases de Tailwind
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}