import { Suspense } from 'react';
import MyGreenCoinClient from './MyGreenCoinClient';

const MyGreenCoin = () => {
  return (
    <Suspense>
      <MyGreenCoinClient />
    </Suspense>
  );
};

export default MyGreenCoin;
