'use client';

import { useState } from 'react';
import style from './AddGiveCoins.module.scss';
import Coin from '@/components/ui/coin/Coin';
import { IconAdd } from '@/components/icons';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';

const AddGiveCoins = () => {
  const [coinUrl, setCoinUrl] = useState('');

  return (
    <div className="mb-20">
      <div className={style.activityWrapper}>
        <div className="text-center fs-sm border-bottom py-5">
          <p className="fw-bold mb-1">挑選籌碼，送給來留言的人</p>
          <p className="text-muted">每位限領一顆，送完為止</p>
        </div>

        <div className="py-5 d-flex flex-column align-items-center justify-content-center">
          <div className="noText position-relative">
            <Coin scale={0.8} color="green">
              {coinUrl ? (
                <Avatar src={coinUrl} />
              ) : (
                <button
                  type="button"
                  className={style.coinBg}
                  onClick={() => setCoinUrl(AVATAR_LINK.others[0].image)}
                >
                  <IconAdd />
                </button>
              )}
            </Coin>
          </div>
          <span className="mt-1 text-secondary fw-bold fs-5">
            {!coinUrl ? '0' : AVATAR_LINK.others[0].num}
          </span>
          {coinUrl && (
            <Button color="light" size="sm" onClick={() => setCoinUrl('')}>
              更換
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddGiveCoins;
