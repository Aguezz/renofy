import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Typography } from '../../shared-components/Typography';

const NetworkErrorMessage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <FontAwesomeIcon icon={faWifi} className="text-6xl text-gray-400" />
        <Typography size="2xl" className="mt-6">
          Cannot Connect to Local Network
        </Typography>
        <Typography className="mt-2">
          To run this application, connect this desktop to the same wifi as your
          smartphone
        </Typography>
        <Button type="button" variant="contained" size="lg" className="mt-10">
          REFRESH
        </Button>
      </div>
    </Container>
  );
};

export const HasNetwork: React.FC = ({ children }) => {
  const [hasNetwork] = useState(false);

  return <>{hasNetwork ? children : <NetworkErrorMessage />}</>;
};
