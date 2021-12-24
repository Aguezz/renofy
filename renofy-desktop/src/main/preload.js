const { contextBridge, ipcRenderer } = require('electron');
const {
  GET_IPV4_ADDRESS,
  STORE_GET_SERVER_PORT,
  STORE_GET_ACCEPT_BEHAVIOR,
  STORE_SET_SERVER_PORT,
  STORE_SET_ACCEPT_BEHAVIOR,
} = require('../shared/events');

contextBridge.exposeInMainWorld('electron', {
  store: {
    getIPV4Address: () => {
      return ipcRenderer.sendSync(GET_IPV4_ADDRESS);
    },

    getServerPort: () => {
      return ipcRenderer.sendSync(STORE_GET_SERVER_PORT);
    },
    getAcceptBehavior: () => {
      return ipcRenderer.sendSync(STORE_GET_ACCEPT_BEHAVIOR);
    },
    setServerPort: (serverPort) => {
      return ipcRenderer.send(STORE_SET_SERVER_PORT, serverPort);
    },
    setAcceptBehavior: (acceptBehavior) => {
      return ipcRenderer.send(STORE_SET_ACCEPT_BEHAVIOR, acceptBehavior);
    },
  },
  ipcRenderer,
});
