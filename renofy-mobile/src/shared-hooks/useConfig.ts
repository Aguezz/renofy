import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {combine} from 'zustand/middleware';

interface ConfigState {
  enabled: true;
  serverAddr: string | null | undefined;
}

interface ConfigActions {
  setServerAddr: (serverAddress: string | null) => void;
}

export const useConfig = create(
  combine<ConfigState, ConfigActions>(
    {
      enabled: true,
      serverAddr: undefined,
    },
    set => ({
      setServerAddr: (serverAddress: string | null) =>
        set({serverAddr: serverAddress}),
    }),
  ),
);

useConfig.subscribe(state => {
  AsyncStorage.setItem('@server_ip_addr', state.serverAddr || '').catch(
    console.error,
  );
});
