// src/components/ui/avatar.jsx
import Image from 'next/image';
import React from 'react';

export const Avatar = ({ children, className }) => (
  <div className={`avatar ${className}`}>
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }) => (
  <Image height={675} width={1200} src={src} alt={alt} className="rounded-full" />
);

export const AvatarFallback = ({ children }) => (
  <div className="bg-gray-300 rounded-full flex items-center justify-center">{children}</div>
);
