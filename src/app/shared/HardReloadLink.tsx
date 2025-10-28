'use client';

import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function HardReloadLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      {children}
    </Link>
  );
}