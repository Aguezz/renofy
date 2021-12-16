import { clsx } from '../utils/clsx';

type AlertColor = 'success' | 'info' | 'warn' | 'error';

interface AlertProps {
  color: AlertColor;
}

const colorClasses: { [C in AlertColor]: string } = {
  success: 'text-green-700 bg-green-100',
  info: 'text-blue-700 bg-blue-100',
  warn: 'text-orange-700 bg-orange-100',
  error: 'text-red-700 bg-red-100',
};

export const Alert: React.FC<AlertProps & React.HTMLProps<HTMLDivElement>> = ({
  color = 'info',
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'px-4 py-3 leading-normal rounded-lg',
        colorClasses[color]
      )}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
};
