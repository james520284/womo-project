'use client';

import style from './CoinFriendsClient.module.scss';
import PagesHeader from '@/components/header/PagesHeader';
import { useState } from 'react';
import FriendsList from './FriendsList';
import AddFriends from './AddFriends';
import { useSearchParams } from 'next/navigation';

const CoinFriendsClient = () => {
  const searchParams = useSearchParams().get('isChangeToAddFriend');
  const isPageChange = searchParams === 'true';
  const [isChangeToAddFriend, setIsChangeToAddFriend] = useState(Boolean(isPageChange) ?? false);

  return (
    <>
      <PagesHeader
        titleType="txt"
        titleTxt="籌碼朋友"
        friendBtn={true}
        isChangeToAddFriend={isChangeToAddFriend}
        setIsChangeToAddFriend={setIsChangeToAddFriend}
      />

      <div className={`container-fluid ${style.wrapper}`}>
        {isChangeToAddFriend ? <AddFriends /> : <FriendsList />}
      </div>
    </>
  );
};

export default CoinFriendsClient;
