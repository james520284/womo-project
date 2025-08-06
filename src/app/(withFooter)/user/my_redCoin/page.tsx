import { Suspense } from 'react';
import MyRedCoinClient from './MyRedCoinClient';

const MyRedCoin = () => {
  return (
    <Suspense>
      <MyRedCoinClient />
    </Suspense>
  );
};

export default MyRedCoin;
