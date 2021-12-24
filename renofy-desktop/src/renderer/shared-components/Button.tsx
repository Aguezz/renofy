import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useNavigate } from 'react-router';

import { clsx } from '../utils/clsx';

interface ButtonProps {
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'error';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  loading?: boolean;
}

type ButtonVariant = ButtonProps['variant'];
type ButtonColor = ButtonProps['color'];
type ButtonSize = ButtonProps['size'];

const variantColorClasses: {
  [V in Exclude<ButtonVariant, undefined>]: {
    [C in Exclude<ButtonColor, undefined>]: string;
  };
} = {
  contained: {
    primary: 'text-white bg-blue-500 hover:bg-blue-600',
    secondary: 'text-black bg-gray-300 hover:bg-gray-400',
    error: 'text-white bg-red-500 hover:bg-red-600',
  },
  outlined: {
    primary:
      'text-blue-600 border border-blue-600 focus:shadow-outline hover:bg-blue-100 hover:text-blue-700',
    secondary:
      'text-gray-600 border border-gray-600 focus:shadow-outline hover:bg-gray-200 hover:text-gray-700',
    error:
      'text-red-600 border border-red-600 focus:shadow-outline hover:bg-red-100 hover:text-red-700',
  },
  text: {
    primary: 'text-blue-500 hover:bg-blue-100 hover:text-blue-600',
    secondary: 'text-gray-700 hover:bg-gray-200 hover:text-gray-800',
    error: 'text-red-600 hover:bg-red-100 hover:text-red-700',
  },
};

const variantDisabledColorClasses: {
  [V in Exclude<ButtonVariant, undefined>]: {
    [C in Exclude<ButtonColor, undefined>]: string;
  };
} = {
  contained: {
    primary: 'text-white bg-blue-200 hover:bg-blue-300',
    secondary: 'text-gray-400 bg-gray-200 hover:bg-gray-300',
    error: 'text-white bg-red-200 hover:bg-red-300',
  },
  outlined: {
    primary:
      'text-blue-300 border border-blue-300 focus:shadow-outline hover:bg-gray-100 hover:text-blue-400',
    secondary:
      'text-gray-300 border border-gray-300 focus:shadow-outline hover:bg-gray-100 hover:text-gray-400',
    error:
      'text-red-300 border border-red-300 focus:shadow-outline hover:bg-gray-100 hover:text-red-400',
  },
  text: {
    primary: 'text-blue-300 hover:bg-gray-100 hover:text-blue-400',
    secondary: 'text-gray-300 hover:bg-gray-100 hover:text-gray-400',
    error: 'text-red-300 hover:bg-gray-100 hover:text-red-400',
  },
};

const sizeClasses: { [S in Exclude<ButtonSize, undefined>]: string } = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonProps> & ButtonProps
>(
  (
    {
      to,
      type,
      variant,
      color,
      size,
      block,
      className,
      onClick,
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const navigate = useNavigate();

    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={to !== null ? type || 'submit' : 'button'}
        className={clsx(
          'relative rounded-lg font-semibold transition-colors duration-150 tracking-wide',
          // eslint-disable-next-line no-nested-ternary
          loading
            ? 'bg-gray-200 text-gray-400'
            : disabled
            ? variantDisabledColorClasses[variant || 'text'][color || 'primary']
            : variantColorClasses[variant || 'text'][color || 'primary'],
          sizeClasses[size || 'md'],
          block && 'block w-full',
          disabled && 'cursor-not-allowed',
          className
        )}
        {...props}
        onClick={to ? () => navigate(to) : onClick}
        disabled={disabled || loading}
      >
        {children}
        {loading && (
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex items-center">
            <CircularProgress size={18} thickness={7} />
          </div>
        )}
      </button>
    );
  }
);

Button.defaultProps = {
  to: undefined,
  type: 'submit',
  variant: 'text',
  color: 'primary',
  size: 'md',
  block: false,
  loading: false,
};
