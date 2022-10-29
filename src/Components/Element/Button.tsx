import React from 'react';

interface ButtonProps {
  arialLabel: string;
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  variant: 'contained' | 'outline' | 'error' | 'text';
  color?: 'primary' | 'secondary';
  uppercase?: boolean;
  className?: String;
  action?: () => void;
  padding?: string;
  widthFull?: boolean;
}

const Button = ({
  label,
  arialLabel,
  type,
  variant,
  uppercase,
  className,
  color,
  action,
  padding = 'p-6',
  widthFull = true,
}: ButtonProps) => {
  return (
    <div>
      <button
        aria-label={arialLabel}
        type={type}
        onClick={action}
        className={`
        ${uppercase && 'uppercase'}
        ${variant === 'contained' && 'bg-black text-white '}
        ${variant === 'text' && ' text-black '}
        ${widthFull && 'w-full'}
        ${
          variant === 'outline' &&
          'border border-black text-black hover:bg-black hover:text-white duration-700 '
        }
          font-medium ${padding} ${className} `}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
