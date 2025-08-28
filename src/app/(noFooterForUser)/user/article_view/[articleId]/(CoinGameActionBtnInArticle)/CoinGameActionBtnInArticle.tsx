'use client';

import style from './CoinGameActionBtnInArticle.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

export const GiveCoinBtnInArticle = ({ ...props }) => {
  return (
    <button type="button" className={style.coinActionBtn} {...props}>
      <div className={style.coinWrapper}>
        <Coin color="green" scale={0.3}>
          <Avatar src={AVATAR_LINK.my} />
        </Coin>
      </div>
      <span className="ms-3 fw-bold fs-sm text-light">領取</span>
    </button>
  );
};
