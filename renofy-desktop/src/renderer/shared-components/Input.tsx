import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { clsx } from '../utils/clsx';

interface InputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<
  InputProps & React.HTMLProps<HTMLInputElement>
> = ({ name, label, error, className, required, ...props }) => {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div className="text-gray-700">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={clsx(
          'w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline',
          className
        )}
        required={required}
        {...props}
      />
      {!!error && <span className="text-xs text-gray-600">{error}</span>}
    </div>
  );
};
