import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router';

import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Input } from '../../shared-components/Input';
import { Navbar } from '../../shared-components/Navbar';
import { Typography } from '../../shared-components/Typography';
import { HasNetwork } from '../network';

export const QRCodePage = () => {
  const navigate = useNavigate();

  return (
    <HasNetwork>
      <Container>
        <div className="flex flex-col h-screen">
          <Navbar
            title="QR Code"
            onBack={() => navigate('/dashboard')}
            className="flex-shrink"
          />

          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-5">
              <div className="text-center">
                <div className="inline-block rounded-lg border-4 border-gray-200 p-2">
                  <QRCode value="http://192.168.43.116:8082" size={200} />
                </div>
              </div>

              <div className="px-8 py-4 bg-gray-100 rounded-xl flex flex-col justify-center items-center gap-3">
                <Typography size="xl" className="font-semibold">
                  Scan QR Code
                </Typography>

                <Typography className="text-gray-800">
                  Scan this QR code from your phone or you can input server
                  address manually
                </Typography>

                <Input
                  value="http://192.168.43.116:8082"
                  className="text-center"
                  readOnly
                />
              </div>

              {/* <Button to="/dashboard" variant="contained" block>
            Skip
          </Button> */}
            </div>
          </div>
        </div>
      </Container>
    </HasNetwork>
  );
};
