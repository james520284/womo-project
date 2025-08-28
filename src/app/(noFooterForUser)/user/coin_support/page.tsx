import { Suspense } from 'react';
import CoinSupportClient from './CoinSupportClient';

const coinSupport = () => {
  return (
    <Suspense>
      <CoinSupportClient />
    </Suspense>
  );
};

export default coinSupport;
