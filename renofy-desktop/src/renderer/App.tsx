import {
  MemoryRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { routes } from './routes';
import { AlertContextProvider } from './shared-context/alert';

declare global {
  interface Window {
    electron: {
      store: {
        getIPV4Address: () => string;
        getServerPort: () => string;
        setServerPort: (serverPort: string) => void;
        getAcceptBehavior: () => 'auto' | 'manual';
        setAcceptBehavior: (acceptBehavior: 'auto' | 'manual') => void;
      };
      ipcRenderer: Electron.IpcRenderer;
    };
  }
}

export default function App() {
  return (
    <AlertContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </AlertContextProvider>
  );
}
