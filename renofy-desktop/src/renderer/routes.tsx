import { LandingPage } from './modules/landing';

interface Route {
  path: string;
  component: () => JSX.Element;
}

export const routes: Route[] = [{ path: '/', component: LandingPage }];
