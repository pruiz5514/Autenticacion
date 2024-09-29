import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
      transition duration-200 ease-in-out cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;