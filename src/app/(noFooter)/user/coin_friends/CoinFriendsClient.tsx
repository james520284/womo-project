'use client';

import style from './CoinFriendsClient.module.scss';
import CoinFriendsHeader from '@/components/header/CoinFriendsHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import FriendsList from './FriendsList';
import AddFriends from './AddFriends';
import { useSearchParams } from 'next/navigation';

const CoinFriendsClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const searchParams = useSearchParams().get('isChangeToAddFriend');
  const isPageChange = searchParams === 'true';
  const [isChangeToAddFriend, setIsChangeToAddFriend] = useState(Boolean(isPageChange) ?? false);

  return (
    <>
      {/* Header區 */}
      {isMobile || isTablet ? (
        <CoinFriendsHeader
          isChangeToAddFriend={isChangeToAddFriend}
          setIsChangeToAddFriend={setIsChangeToAddFriend}
        />
      ) : (
        <Header />
      )}

      <div className={`container-fluid ${style.wrapper}`}>
        {isChangeToAddFriend ? <AddFriends /> : <FriendsList />}
      </div>
    </>
  );
};

export default CoinFriendsClient;
