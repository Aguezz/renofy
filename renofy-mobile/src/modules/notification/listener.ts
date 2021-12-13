import {useConfig} from './../../shared-hooks/useConfig';
import axios from 'axios';

interface NotificationListener {
  time: string;
  app: string;
  title: string;
  titleBig: string;
  text: string;
  subText: string;
  summaryText: string;
  bigText: string;
  audioContentsURI: string;
  imageBackgroundURI: string;
  extraInfoText: string;
  groupedMessages: Array<{
    title: string;
    text: string;
  }>;
  icon: string; // base64
  image: string; // base64
}

export const headlessNotificationListener = async ({
  notification,
}: {
  notification: string;
}) => {
  const {enabled, serverAddr} = useConfig.getState();

  if (notification && enabled && !!serverAddr) {
    const sanitizedServerAddr = serverAddr.replace(/\/$/gm, '');

    axios
      .post(
        `http://${sanitizedServerAddr}/send`,
        JSON.parse(notification) as NotificationListener,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
