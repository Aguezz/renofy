import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { clsx } from '../utils/clsx';
import { Button } from './Button';
import { Typography } from './Typography';

interface NavbarProps {
  title: string;
  onBack?: () => void;
  rightComponent?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  className,
  onBack = null,
  rightComponent = null,
}) => {
  return (
    <div
      className={clsx('flex items-center justify-between mb-3 py-2', className)}
    >
      <div className="flex-1 flex justify-start">
        {!!onBack && (
          <Button
            type="button"
            onClick={onBack}
            className="px-0 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </Button>
        )}
      </div>

      <Typography size="xl" className="flex-shrink font-semibold">
        {title}
      </Typography>

      <div className="flex-1 flex justify-end">{rightComponent}</div>
    </div>
  );
};
