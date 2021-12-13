/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNAndroidNotificationListener from 'react-native-android-notification-listener';

import {HomeScreen} from './src/modules/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useConfig} from './src/shared-hooks/useConfig';

const usePermissionHandler = () => {
  useEffect(() => {
    RNAndroidNotificationListener.getPermissionStatus().then(status => {
      if (status !== 'authorized') {
        RNAndroidNotificationListener.requestPermission();
      }
    });
  }, []);
};

const useRestoreState = () => {
  useEffect(() => {
    AsyncStorage.getItem('@server_ip_addr').then(value =>
      useConfig.getState().setServerAddr(value),
    );
  }, []);
};

const App = () => {
  usePermissionHandler();
  useRestoreState();

  return (
    <SafeAreaProvider>
      <StatusBar />
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
