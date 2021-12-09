/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import RNAndroidNotificationListener, {
  RNAndroidNotificationListenerHeadlessJsName,
} from 'react-native-android-notification-listener';

// To check if the user has permission
// const status = await RNAndroidNotificationListener.getPermissionStatus();
// console.log(status); // Result can be 'authorized', 'denied' or 'unknown'

RNAndroidNotificationListener.getPermissionStatus().then(status => {
  if (status !== 'authorized') {
    RNAndroidNotificationListener.requestPermission();
  }
});

// To open the Android settings so the user can enable it

/**
 * Note that this method MUST return a Promise.
 * Is that why I'm using a async function here.
 */
const headlessNotificationListener = async ({notification}) => {
  /**
   * This notification is a JSON string in the follow format:
   *  {
   *      "time": string,
   *      "app": string,
   *      "title": string,
   *      "titleBig": string,
   *      "text": string,
   *      "subText": string,
   *      "summaryText": string,
   *      "bigText": string,
   *      "audioContentsURI": string,
   *      "imageBackgroundURI": string,
   *      "extraInfoText": string,
   *      "groupedMessages": Array<Object> [
   *          {
   *              "title": string,
   *              "text": string
   *          }
   *      ],
   *      "icon": string (base64),
   *      "image": string (base64), // WARNING! THIS MAY NOT WORK FOR SOME APPLICATIONS SUCH TELEGRAM AND WHATSAPP
   *  }
   *
   * Note that this properties depends on the sender configuration
   * so many times a lot of them will be empty
   */

  if (notification) {
    /**
     * Here you could store the notifications in a external API.
     * I'm using AsyncStorage here as an example.
     */

    // fetch('https://ec77-202-67-40-234.ngrok.io/send', {
    fetch('http://192.168.43.116:8082/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: notification,
    })
      .then(res => {
        console.log(res.status);
        console.log('ADA RES', res);
      })
      .catch(err => {
        console.log('ADA ERROR', err);
      });
  }
};

AppRegistry.registerComponent(appName, () => App);

/**
 * This should be required early in the require sequence
 * to make sure the JS execution environment is setup before other
 * modules are required.
 *
 * Your entry file (index.js) would be the better place for it.
 *
 * PS: I'm using here the constant RNAndroidNotificationListenerHeadlessJsName to ensure
 *     that I register the headless with the right name
 */
AppRegistry.registerHeadlessTask(
  RNAndroidNotificationListenerHeadlessJsName,
  () => headlessNotificationListener,
);
