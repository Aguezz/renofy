import { Link } from 'react-router-dom';

import { HasNetwork } from '../network';
import { AutoAllowForm } from './forms/AutoAllowForm';
import { ServerPortForm } from './forms/ServerPortForm';

export const SettingPage = () => {
  return (
    <HasNetwork>
      <div className="flex flex-col gap-5">
        <AutoAllowForm />
        <ServerPortForm />

        <Link to="/dashboard">Back</Link>
      </div>
    </HasNetwork>
  );
};
