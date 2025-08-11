import { Suspense } from 'react';
import GreenCoinGameListClient from './GreenCoinGameListClient';

const GreenCoinGameList = () => {
  return (
    <Suspense>
      <GreenCoinGameListClient />
    </Suspense>
  );
};

export default GreenCoinGameList;
