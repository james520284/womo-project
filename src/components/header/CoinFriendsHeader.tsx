'use client';

import style from './CoinFriendsHeader.module.scss';
import { useRouter } from 'next/navigation';
import { BackArrowIcon, AddFriendIcon, FriendsListIcon } from '../icons/AllIcon';

type Props = {
  isChange: boolean;
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const CoinFriendsHeader = ({ isChange, setIsChange }: Props) => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <BackArrowIcon width={28} />
          </button>
          <h1 className="fs-5 fw-bold">{isChange ? '新增' : '籌碼'}朋友</h1>
          {isChange ? (
            <button type="button" onClick={() => setIsChange(!isChange)}>
              <FriendsListIcon width={24} />
            </button>
          ) : (
            <button type="button" onClick={() => setIsChange(!isChange)}>
              <AddFriendIcon width={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default CoinFriendsHeader;
