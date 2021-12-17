import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { clsx } from '../utils/clsx';

interface SelectProps {
  value: string;
  options: {
    value: string;
    text: string;
  }[];
  label?: string;
}

export const Select: React.FC<
  SelectProps & React.HTMLProps<HTMLSelectElement>
> = ({ value, options, label, className, required, ...props }) => {
  const id = useMemo(() => uuidv4(), []);

  return (
    <div className="w-full text-gray-700">
      <label className="block mb-1" htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative inline-block w-full">
        <select
          id={id}
          value={value}
          className={clsx(
            'w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 bg-white border rounded-lg appearance-none focus:shadow-outline',
            className
          )}
          required={required}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
