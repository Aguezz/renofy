import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { clsx } from '../utils/clsx';

interface InputProps {
  name?: string;
  label?: string;
  error?: string;
}

export const Input: React.FC<
  InputProps & React.HTMLProps<HTMLInputElement>
> = ({ name, label, error, className, ...props }) => {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div className="text-gray-700">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={clsx(
          'w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline',
          className
        )}
        {...props}
      />
      {!!error && <span className="text-xs text-gray-600">{error}</span>}
    </div>
  );
};
