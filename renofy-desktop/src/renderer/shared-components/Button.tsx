import { clsx } from '../utils/clsx';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonColor = 'primary' | 'secondary' | 'error';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  block?: boolean;
}

const variantColorClasses: {
  [V in ButtonVariant]: { [C in ButtonColor]: string };
} = {
  contained: {
    primary: 'text-white bg-blue-500 hover:bg-blue-600',
    secondary: 'text-white bg-gray-500 hover:bg-gray-600',
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
    primary: 'text-blue-600 hover:bg-blue-100 hover:text-blue-700',
    secondary: 'text-gray-700 hover:bg-gray-200 hover:text-gray-800',
    error: 'text-red-600 hover:bg-red-100 hover:text-red-700',
  },
};

const sizeClasses: { [S in ButtonSize]: string } = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-md',
  lg: 'px-5 py-3 text-lg2',
};

export const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({
  type = 'submit',
  variant = 'text',
  color = 'primary',
  size = 'md',
  block = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'rounded-lg font-semibold transition-colors duration-150',
        variantColorClasses[variant][color],
        sizeClasses[size],
        block && 'block w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
