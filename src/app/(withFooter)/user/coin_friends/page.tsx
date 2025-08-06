import { Suspense } from 'react';
import CoinFriendsClient from './CoinFriendsClient';

const coinFriends = () => {
  return (
    <Suspense>
      <CoinFriendsClient />
    </Suspense>
  );
};

export default coinFriends;
