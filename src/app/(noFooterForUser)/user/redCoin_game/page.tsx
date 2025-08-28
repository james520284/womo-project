import { Suspense } from 'react';
import RedCoinGameListClient from './RedCoinGameListClient';

const RedCoinGameList = () => {
  return (
    <Suspense>
      <RedCoinGameListClient />
    </Suspense>
  );
};

export default RedCoinGameList;
