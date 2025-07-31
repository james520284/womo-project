import style from './page.module.scss';
import { Suspense } from 'react';
import CoinFansClient from './CoinFansClient';

const CoinFans = () => {
  return (
    <Suspense>
      <CoinFansClient />
    </Suspense>
  );
};

export default CoinFans;
