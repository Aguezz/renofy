import { useNavigate } from 'react-router';

import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Navbar } from '../../shared-components/Navbar';

interface Device {
  name: string;
  isConnected: boolean;
}

const DeviceCard: React.FC<Device> = ({ name, isConnected }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-lg shadow">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <span>{name} </span>
          {isConnected ? (
            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
              Connected
            </span>
          ) : (
            <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-orange-100 bg-orange-500 rounded-full">
              Disconnected
            </span>
          )}
        </div>
        <Button
          size="sm"
          variant="contained"
          color="error"
          className="shrink-0"
        >
          Revoke
        </Button>
      </div>
    </div>
  );
};

const devices: Device[] = [
  { name: 'Samsung M20', isConnected: true },
  { name: 'Sony Xperia X Compact', isConnected: false },
];

export const DevicePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar title="Devices" onBack={() => navigate('/dashboard')} />

      <div className="flex flex-col gap-3 mt-3">
        {devices.map((device, index) => (
          <DeviceCard
            key={index}
            name={device.name}
            isConnected={device.isConnected}
          />
        ))}
      </div>
    </Container>
  );
};
