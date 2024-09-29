import React from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, value, onChange }) => {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input