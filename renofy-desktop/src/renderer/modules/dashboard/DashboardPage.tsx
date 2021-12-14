import { HasNetwork } from '../network';
import { Devices } from './components/Devices';
import { Navbar } from './components/Navbar';
import { Notifications } from './components/Notifications';

export const DashboardPage = () => {
  return (
    <HasNetwork>
      <div className="flex flex-col gap-5">
        <Navbar />
        <Devices />
        <Notifications />
      </div>
    </HasNetwork>
  );
};
