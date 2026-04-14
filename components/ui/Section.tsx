import React from 'react';
import Container from './Container';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({ 
  children, 
  id, 
  className, 
  containerClassName 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn('py-16 md:py-24 overflow-hidden', className)}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}