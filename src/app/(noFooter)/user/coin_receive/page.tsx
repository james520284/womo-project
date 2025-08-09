import { Suspense } from 'react';
import CoinReceiveClient from './CoinReceiveClient';

const coinReceive = () => {
  return (
    <Suspense>
      <CoinReceiveClient />
    </Suspense>
  );
};

export default coinReceive;
