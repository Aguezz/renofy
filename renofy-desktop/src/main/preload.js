const { contextBridge, ipcRenderer } = require('electron');
const { GET_IPV4_ADDRESS } = require('../shared-modules/events');

contextBridge.exposeInMainWorld('electron', {
  store: {
    getIPV4Address: () => {
      return ipcRenderer.sendSync(GET_IPV4_ADDRESS);
    },
  },
  ipcRenderer,
});
