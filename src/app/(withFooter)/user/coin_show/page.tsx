import { Suspense } from 'react';
import CoinShowClient from './CoinShowClient';

const coinShow = () => {
  return (
    <Suspense>
      <CoinShowClient />
    </Suspense>
  );
};

export default coinShow;
