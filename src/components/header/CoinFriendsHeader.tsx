'use client';

import style from './CoinFriendsHeader.module.scss';
import { useRouter } from 'next/navigation';
import { IconBackArrow, IconAddFriend, IconFriendsList } from '../icons';

type Props = {
  isChangeToAddFriend: boolean;
  setIsChangeToAddFriend: React.Dispatch<React.SetStateAction<boolean>>;
};

const CoinFriendsHeader = ({ isChangeToAddFriend, setIsChangeToAddFriend }: Props) => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <IconBackArrow width={28} />
          </button>
          <h1 className="fs-5 fw-bold">{isChangeToAddFriend ? '新增' : '籌碼'}朋友</h1>
          {isChangeToAddFriend ? (
            <button type="button" onClick={() => setIsChangeToAddFriend(!isChangeToAddFriend)}>
              <IconFriendsList width={24} />
            </button>
          ) : (
            <button type="button" onClick={() => setIsChangeToAddFriend(!isChangeToAddFriend)}>
              <IconAddFriend width={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default CoinFriendsHeader;
