import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}
