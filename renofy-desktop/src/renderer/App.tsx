import {
  MemoryRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { routes } from './routes';

declare global {
  interface Window {
    electron: {
      store: {
        getIPV4Address: () => string;
      };
      ipcRenderer: Electron.IpcRenderer;
    };
  }
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}
