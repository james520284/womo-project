import { Suspense } from 'react';
import CoinWalletClient from './CoinWalletClient';

const CoinWallet = () => {
  return (
    <Suspense>
      <CoinWalletClient />
    </Suspense>
  );
};

export default CoinWallet;
