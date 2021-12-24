import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

import { SECOND } from '../../shared/constant';
import { Alert as AlertComponent } from '../shared-components/Alert';

const alertRoot = document.getElementById('alert-root') as HTMLElement;

interface Alert {
  id?: string;
  title: string;
  color: 'success' | 'info' | 'warn' | 'error';
  destroyAt?: number;
}

interface AlertActions {
  show: (alert: Alert) => void;
}

export const AlertContext = createContext<AlertActions>({} as AlertActions);

const AlertPortal: React.FC<{
  alerts: Alert[];
  destroy: (id: string) => void;
}> = ({ alerts, destroy }) => {
  return createPortal(
    alerts.length > 0 ? (
      <div className="flex flex-col gap-4">
        {alerts.map(({ id, color, title }) => (
          <AlertComponent
            key={id}
            color={color}
            className="pointer-events-auto"
            onClose={() => destroy(id as string)}
            shadow
          >
            {title}
          </AlertComponent>
        ))}
      </div>
    ) : null,
    alertRoot
  );
};

export const AlertContextProvider: React.FC = ({ children }) => {
  const tickerRef = useRef<NodeJS.Timer>();
  const [ticker, setTicker] = useState(0);

  const [alerts, setAlerts] = useState<Alert[]>([]);

  const show = useCallback((alert: Alert) => {
    if (!alert.id) alert.id = uuidv4();
    if (!alert.destroyAt) alert.destroyAt = Date.now() + 10 * SECOND;

    setAlerts((currentAlerts) => [...currentAlerts, alert]);
  }, []);

  const destroy = useCallback((id: string) => {
    setAlerts((currentAlerts) =>
      currentAlerts.filter((alert) => alert.id !== id)
    );
  }, []);

  // Start the ticker.
  useEffect(() => {
    tickerRef.current = setInterval(
      () => setTicker((currentTicker) => currentTicker + 1),
      1 * SECOND
    );

    return () => {
      if (tickerRef.current) {
        clearInterval(tickerRef.current);
      }
    };
  }, []);

  // Remove alert when expired.
  useEffect(() => {
    const currentTime = Date.now();

    alerts.forEach(({ id, destroyAt }) => {
      if (destroyAt && destroyAt < currentTime) {
        destroy(id as string);
      }
    });
    // Just need to execute this hook when ticker gets update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticker]);

  return (
    <AlertContext.Provider value={{ show }}>
      {children}
      <AlertPortal alerts={[...alerts].reverse()} destroy={destroy} />
    </AlertContext.Provider>
  );
};
