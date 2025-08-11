'use client';

import style from './ArticleHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import { IconBackArrow, IconShare, IconGift } from '../icons';
import { useRouter } from 'next/navigation';
import Coin from '../ui/coin/Coin';
import Button from '../ui/button/submit/Button';

const GreenCoinGameHeader = () => {
  const router = useRouter();
  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <div className="d-flex align-items-center">
            <button onClick={() => router.back()}>
              <IconBackArrow width={20} />
            </button>
            <div className="d-flex align-items-center ms-5">
              <Link href="/user/my_profile">
                <Coin color="green" scale={0.5}>
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>
              </Link>
              <div className="text-start ms-2">
                <h1 className="fs-5 fw-bold d-flex align-items-center fs-sm text-coinGreen">36</h1>
                <p className="fs-xs text-muted">我目前持有</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button color="green" size="md">
              <div className="d-flex align-items-center">
                <IconGift width={20} />
                <span className="ms-1">領籌碼</span>
              </div>
            </Button>
            <button className="ms-2">
              <IconShare width={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GreenCoinGameHeader;
