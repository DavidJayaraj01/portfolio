import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'info' | 'warning';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-red-500 to-orange-500',
    success: 'bg-green-500',
    info: 'bg-yellow-500',
    warning: 'bg-amber-500'
  };

  return (
    <span className={`${variantClasses[variant]} text-white text-xs px-3 py-1 rounded-full font-semibold ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
