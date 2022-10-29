import React from 'react';

interface ButtonProps {
  arialLabel: string;
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  variant: 'contained' | 'outline' | 'error';
  color?: 'primary' | 'secondary';
  uppercase?: boolean;
  className?: String;
  action?: () => void;
}

const Button = ({ label, arialLabel, type, variant, uppercase, color, action }: ButtonProps) => {
  return (
    <div>
      <button
        aria-label={arialLabel}
        type={type}
        onClick={action}
        className={`
        ${uppercase && 'uppercase'}
        ${variant === 'contained' && 'bg-black text-white '}
        ${
          variant === 'outline' &&
          'border border-black text-black hover:bg-black hover:text-white duration-700 '
        }
        w-full p-6 font-medium`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
