import React from 'react';

import { cn } from '@/lib/utils';

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function GuideSection({
  title,
  children,
  className,
}: GuideSectionProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {children}
    </div>
  );
}
