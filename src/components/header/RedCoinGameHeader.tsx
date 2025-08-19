'use client';

import style from './RedCoinGameHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import { IconBackArrow, IconCart } from '../icons';
import { useRouter } from 'next/navigation';
import Coin from '../ui/coin/Coin';
import ButtonOutline from '../ui/button/submit/ButtonOutline';

const RedCoinGameHeader = () => {
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
                <Coin color="red" scale={0.5}>
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>
              </Link>
              <div className="text-start ms-2">
                <h1 className="fs-5 fw-bold d-flex align-items-center fs-sm text-coinRed">9</h1>
                <p className="fs-xs text-muted">我目前持有</p>
              </div>
            </div>
          </div>
          <ButtonOutline color="red" size="md">
            <div className="d-flex align-items-center">
              <IconCart width={20} />
              <span className="ms-1">買籌碼</span>
            </div>
          </ButtonOutline>
        </div>
      </div>
    </header>
  );
};

export default RedCoinGameHeader;
