import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  icon 
}) => {
  const baseClasses = 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105',
    secondary: 'bg-dark-card border border-orange-500/50 text-white hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30',
    outline: 'border-2 border-orange-500/50 text-white hover:bg-orange-500/10 hover:border-orange-500'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        download={href.endsWith('.pdf')}
      >
        {children}
        {icon && icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {icon && icon}
    </motion.button>
  );
};

export default Button;
