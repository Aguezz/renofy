import { clsx } from '../utils/clsx';

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface TypographyProps {
  size?: Size;
}

const sizeClasses: { [s in Size]: string } = {
  sm: 'prose prose-sm',
  md: 'prose',
  lg: 'prose prose-lg',
  xl: 'prose prose-xl',
  '2xl': 'prose prose-2xl',
};

export const Typography: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, size = 'md', className, ...props }) => {
  return (
    <div className={clsx(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
};
