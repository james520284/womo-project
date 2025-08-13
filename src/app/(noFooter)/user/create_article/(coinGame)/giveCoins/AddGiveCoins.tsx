'use client';

import { useState } from 'react';
import style from './AddGiveCoins.module.scss';
import CheckBtn2 from '@/components/ui/button/icon/CheckBtn2';
import Coin from '@/components/ui/coin/Coin';
import { IconAdd } from '@/components/icons';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';

const AddGiveCoins = () => {
  const [coinUrl, setCoinUrl] = useState('');

  return (
    <div className="mb-20">
      <h2 className="fs-6 fw-bold mb-4">贈幣：送給留言者籌碼</h2>

      <div className={style.activityWrapper}>
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
          <span className="mt-1 text-secondary fw-bold fs-5">0</span>
          {coinUrl && (
            <Button color="light" size="sm" onClick={() => setCoinUrl('')}>
              更換
            </Button>
          )}
        </div>
        <div className="text-center fs-sm border-top py-5">
          <p>選擇籌碼包內的籌碼，送給留言者</p>
          <p className="text-muted">每位限領一顆，送完為止</p>
        </div>
      </div>
    </div>
  );
};

export default AddGiveCoins;
