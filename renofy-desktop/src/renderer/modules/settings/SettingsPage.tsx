import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useSettings } from '../../global-stores/useSettings';
import { Alert } from '../../shared-components/Alert';
import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Input } from '../../shared-components/Input';
import { Navbar } from '../../shared-components/Navbar';
import { Select } from '../../shared-components/Select';
import { AlertContext } from '../../shared-context/alert';
import { HasNetwork } from '../network';

const options = [
  { value: 'auto', text: 'Auto Accept' },
  { value: 'manual', text: 'Accept Manually' },
];

const SettingsForm = () => {
  const navigate = useNavigate();
  const alert = useContext(AlertContext);

  const {
    storedAcceptBehavior,
    storedServerPort,
    storeAcceptBehavior,
    storeServerPort,
    reset,
  } = useSettings((state) => ({
    storedAcceptBehavior: state.acceptBehavior,
    storedServerPort: state.serverPort,
    storeAcceptBehavior: state.setAcceptBehavior,
    storeServerPort: state.setServerPort,
    reset: state.reset,
  }));

  const [serverPort, setServerPort] = useState<string | undefined>(undefined);
  const [acceptBehavior, setAcceptBehavior] = useState<
    'auto' | 'manual' | undefined
  >(undefined);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (acceptBehavior && serverPort) {
      storeAcceptBehavior(acceptBehavior);
      storeServerPort(serverPort);
      alert.show({ title: 'Settings saved successfully', color: 'success' });
    }
  };

  const handleCancel = () => {
    setServerPort(storedServerPort);
    setAcceptBehavior(storedAcceptBehavior);
  };

  const handleReset = () => {
    reset();
    alert.show({ title: 'Settings reset successfully', color: 'success' });
  };

  useEffect(() => {
    setServerPort(storedServerPort);
    setAcceptBehavior(storedAcceptBehavior);
  }, [storedServerPort, storedAcceptBehavior]);

  return (
    <>
      <Navbar title="Settings" onBack={() => navigate('/')} />

      <div className="flex flex-col gap-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <Input
              label="Server Port"
              value={serverPort || ''}
              onChange={(e) =>
                setServerPort((e.target as HTMLInputElement).value)
              }
              placeholder="Ex: 8082"
              required
            />
            <Select
              label="Auto Accept Request"
              value={acceptBehavior || ''}
              options={options}
              onChange={(e) =>
                setAcceptBehavior(
                  (e.target as HTMLSelectElement).value as 'auto' | 'manual'
                )
              }
              required
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant="contained"
                disabled={
                  acceptBehavior === storedAcceptBehavior &&
                  serverPort === storedServerPort
                }
              >
                Save
              </Button>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                disabled={
                  acceptBehavior === storedAcceptBehavior &&
                  serverPort === storedServerPort
                }
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-3">
          <Alert color="error">Reset settings to default</Alert>
          <Button variant="contained" color="error" onClick={handleReset} block>
            Reset Settings
          </Button>
        </div>
      </div>
    </>
  );
};

export const SettingsPage = () => {
  return (
    <HasNetwork>
      <Container>
        <SettingsForm />
      </Container>
    </HasNetwork>
  );
};
