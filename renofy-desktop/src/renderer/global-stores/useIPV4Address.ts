import create from 'zustand';
import { combine } from 'zustand/middleware';

export const useIPV4Address = create(
  combine(
    {
      address: window.electron.store.getIPV4Address(),
    },
    (set) => ({
      setAddress: (newAddress: string) => {
        set({ address: newAddress });
      },
    })
  )
);
