import { useState } from 'react';

interface HasNetworkProps {
  children: React.ReactNode;
}

const NetworkErrorMessage = () => {
  return (
    <div className="container mx-auto px-16 flex items-center text-center h-screen">
      To run this application, connect this desktop to the same wifi as your
      smartphone
    </div>
  );
};

export const HasNetwork: React.FC<HasNetworkProps> = ({
  children,
}: HasNetworkProps) => {
  const [hasNetwork] = useState(false);

  return <>{hasNetwork ? children : <NetworkErrorMessage />}</>;
};
