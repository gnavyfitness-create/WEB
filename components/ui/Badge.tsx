import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'gold' | 'gray';
  className?: string;
}

export default function Badge({ children, variant = 'gray', className }: BadgeProps) {
  const variants = {
    blue: 'bg-[#0F2F57]/10 text-[#0F2F57]',
    gold: 'bg-[#C9A35A]/10 text-[#C9A35A]',
    gray: 'bg-[#F7F4EE] text-[#1E2430]/70 border border-[#D9D6CF]',
  };

  return (
    <span className={cn(
      'inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full', 
      variants[variant], 
      className
    )}>
      {children}
    </span>
  );
}