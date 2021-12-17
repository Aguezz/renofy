import { Typography } from '../../shared-components/Typography';
import { NotificationCard } from './components/NotificationCard';

export const Notifications = () => {
  return (
    <>
      <Typography size="lg" className="font-semibold mb-3">
        Notifications
      </Typography>

      <div className="flex flex-col gap-3">
        <NotificationCard />
      </div>
    </>
  );
};
