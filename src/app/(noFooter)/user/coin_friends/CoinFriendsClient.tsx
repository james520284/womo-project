'use client';

import style from './CoinFriendsClient.module.scss';
import CoinFriendsHeader from '@/components/header/CoinFriendsHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import FriendsList from './FriendsList';

const CoinFriendsClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [isChange, setIsChange] = useState(false);

  return (
    <>
      {/* Header區 */}
      {isMobile || isTablet ? (
        <CoinFriendsHeader isChange={isChange} setIsChange={setIsChange} />
      ) : (
        <Header />
      )}

      <div className={`container-fluid ${style.wrapper}`}>
        <FriendsList />
      </div>
    </>
  );
};

export default CoinFriendsClient;
