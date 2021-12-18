import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import { useIPV4Address } from '../../global-stores/useIPV4Address';
import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Typography } from '../../shared-components/Typography';

interface NetworkErrorMessageProps {
  onRetry: () => void;
}

const NetworkErrorMessage: React.FC<NetworkErrorMessageProps> = ({
  onRetry,
}) => {
  const [loading, setLoading] = useState(false);

  const handleRetry = async () => {
    onRetry();
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <FontAwesomeIcon icon={faWifi} className="text-6xl text-gray-400" />
        <Typography size="2xl" className="mt-6">
          Cannot Connect to a Local Network
        </Typography>
        <Typography className="mt-2">
          To run this application, connect this desktop to the same wifi as your
          smartphone
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="error"
          className="mt-10"
          onClick={handleRetry}
          loading={loading}
        >
          Try Again
        </Button>
      </div>
    </Container>
  );
};

export const HasNetwork: React.FC = ({ children }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [address, setAddress] = useIPV4Address((state) => [
    state.address,
    state.setAddress,
  ]);

  const handleRetry = () => {
    setIsOnline(window.navigator.onLine);
  };

  useEffect(() => {
    setIsOnline(window.navigator.onLine);
  }, []);

  useEffect(() => {
    if (isOnline) {
      setAddress(window.electron.store.getIPV4Address());
    }
    // Prevent infinite function calls
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('online', handleOffline);
    };
  }, []);

  return (
    <>
      {!isOnline || address === '127.0.0.1' ? (
        <NetworkErrorMessage onRetry={handleRetry} />
      ) : (
        children
      )}
    </>
  );
};
