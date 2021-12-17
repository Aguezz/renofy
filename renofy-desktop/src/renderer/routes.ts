import { DashboardPage } from './modules/dashboard';
import { DevicePage } from './modules/device/DevicePage';
import { QRCodePage } from './modules/qr-code';
import { SettingsPage } from './modules/settings';

interface Route {
  path: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [
  { path: '/qr-code', component: QRCodePage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/devices', component: DevicePage },
  { path: '/settings', component: SettingsPage },
];
