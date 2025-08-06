'use client';

import style from './CoinFriendsHeader.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackArrowIcon, AddFriendIcon } from '../icons/AllIcon';

const CoinFriendsHeader = () => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <BackArrowIcon width={28} />
          </button>
          <h1 className="fs-5 fw-bold">籌碼朋友</h1>
          <Link href="#">
            <AddFriendIcon width={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CoinFriendsHeader;
