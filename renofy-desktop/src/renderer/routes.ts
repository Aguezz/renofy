import { DashboardPage } from './modules/dashboard';
import { QRCodePage } from './modules/qr-code';
import { SettingsPage } from './modules/settings';

interface Route {
  path: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [
  { path: '/', component: QRCodePage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/settings', component: SettingsPage },
];
