/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {RNAndroidNotificationListenerHeadlessJsName} from 'react-native-android-notification-listener';

import App from './App';
import {name as appName} from './app.json';
import {headlessNotificationListener} from './src/modules/notification';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask(
  RNAndroidNotificationListenerHeadlessJsName,
  () => headlessNotificationListener,
);
