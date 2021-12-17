import {
  faCog,
  faMobileAlt,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Navbar } from '../../shared-components/Navbar';
import { HasNetwork } from '../network';
import { Notifications } from './Notifications';

export const DashboardPage = () => {
  return (
    <HasNetwork>
      <Container>
        <Navbar
          title="Renofy Server"
          rightComponent={
            <>
              <Tooltip title="QR Code">
                <Button to="/qr-code" className="px-2">
                  <FontAwesomeIcon icon={faQrcode} />
                </Button>
              </Tooltip>
              <Tooltip title="Devices">
                <Button to="/devices" className="px-2">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </Button>
              </Tooltip>
              <Tooltip title="Settings">
                <Button to="/settings" className="px-2">
                  <FontAwesomeIcon icon={faCog} />
                </Button>
              </Tooltip>
            </>
          }
        />
        <Notifications />
      </Container>
    </HasNetwork>
  );
};
