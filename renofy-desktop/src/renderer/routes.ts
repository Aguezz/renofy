import { DashboardPage } from './modules/dashboard';
import { LandingPage } from './modules/landing';
import { SettingPage } from './modules/setting';

interface Route {
  path: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [
  { path: '/', component: LandingPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/setting', component: SettingPage },
];
