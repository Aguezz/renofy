import create from 'zustand';
import { combine } from 'zustand/middleware';

import {
  DEFAULT_ACCEPT_BEHAVIOR,
  DEFAULT_SERVER_PORT,
} from '../../shared/defaultValues';

interface State {
  serverPort: string;
  acceptBehavior: 'auto' | 'manual';
}

export const useSettings = create(
  combine(
    {
      serverPort: window.electron.store.getServerPort(),
      acceptBehavior: window.electron.store.getAcceptBehavior(),
    } as State,
    (set) => ({
      /**
       * Set server port.
       */
      setServerPort: (serverPort: string) => {
        set({ serverPort });
      },

      /**
       * Set accept behavior.
       */
      setAcceptBehavior: (acceptBehavior: 'auto' | 'manual') => {
        set({ acceptBehavior });
      },

      /**
       * Reset settings.
       */
      reset: () => {
        set({
          serverPort: DEFAULT_SERVER_PORT,
          acceptBehavior: DEFAULT_ACCEPT_BEHAVIOR,
        });
      },
    })
  )
);

// Sync to electron store
useSettings.subscribe((state, prevState) => {
  if (state.serverPort !== prevState.serverPort) {
    window.electron.store.setServerPort(state.serverPort);
  }

  if (state.acceptBehavior !== prevState.acceptBehavior) {
    window.electron.store.setAcceptBehavior(state.acceptBehavior);
  }
});
