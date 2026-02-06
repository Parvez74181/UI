import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#00c950] text-black hover:bg-[#00b046] focus:ring-[#00c950] shadow-[0_0_15px_rgba(0,201,80,0.3)] hover:shadow-[0_0_25px_rgba(0,201,80,0.5)]",
    secondary: "bg-[#fe9a00] text-black hover:bg-[#e58a00] focus:ring-[#fe9a00]",
    outline: "border-2 border-[#00c950] text-[#00c950] hover:bg-[#00c950] hover:text-black",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};