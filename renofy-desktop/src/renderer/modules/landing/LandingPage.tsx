import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

import { HasNetwork } from '../network';

export const LandingPage = () => {
  return (
    <HasNetwork>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div>Scan this QR code from your phone</div>

          <QRCode value="http://192.168.43.116:8082" size={240} />

          <div>Or you can input manually</div>

          <div>http://192.168.43.116:8082</div>

          <Link to="/dashboard">Skip</Link>
        </div>
      </div>
    </HasNetwork>
  );
};
