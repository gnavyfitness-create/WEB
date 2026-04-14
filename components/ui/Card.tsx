import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white border border-[#D9D6CF]/50 p-6 md:p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(30,36,48,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(30,36,48,0.08)]', 
      className
    )}>
      {children}
    </div>
  );
}