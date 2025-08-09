import { Suspense } from 'react';
import CoinGiveClient from './CoinGiveClient';

const coinGive = () => {
  return (
    <Suspense>
      <CoinGiveClient />
    </Suspense>
  );
};

export default coinGive;
