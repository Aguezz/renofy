import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Alert } from '../../shared-components/Alert';
import { Button } from '../../shared-components/Button';
import { Container } from '../../shared-components/Container';
import { Input } from '../../shared-components/Input';
import { Select } from '../../shared-components/Select';
import { HasNetwork } from '../network';

const options = [
  { value: 'auto', text: 'Auto Accept' },
  { value: 'manual', text: 'Accept Manually' },
];

const SettingsForm = () => {
  const [autoAllow, setAutoAllow] = useState('manual');
  const [serverPort, setServerPort] = useState('8082');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button to="/dashboard" className="flex gap-3 items-center pl-0">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Input
            label="Server Port"
            value={serverPort}
            onChange={(e) =>
              setServerPort((e.target as HTMLInputElement).value)
            }
            placeholder="Ex: 8082"
            required
          />
          <Select
            label="Auto Accept Request"
            value={autoAllow}
            options={options}
            onChange={(e) =>
              setAutoAllow((e.target as HTMLSelectElement).value)
            }
            required
          />
          <div className="flex gap-2 justify-end">
            <Button variant="contained">Save</Button>
            <Button type="button" variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-3">
        <Alert color="error">Reset settings to default</Alert>
        <Button variant="contained" color="error" block>
          Reset Settings
        </Button>
      </div>
    </div>
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
