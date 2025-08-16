'use client';

import style from './CoinSupportClient.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { Tab } from '@/components/ui/tab/Tab';
import Coin from '@/components/ui/coin/Coin';
import { useState } from 'react';
import PagesHeader from '@/components/header/PagesHeader';
import CoinGive from './CoinGive';
import RedCoinBuy from './RedCoinBuy';
import { useSearchParams } from 'next/navigation';

const CoinSupportClient = () => {
  const searchParams = useSearchParams().get('buy') as 'give' | 'buy' | null;
  const [supportWay, setSupportWay] = useState<'give' | 'buy'>(searchParams ?? 'give');

  return (
    <>
      {/* Header區 */}
      <PagesHeader />

      <div className={`container-fluid mt-5 mb-20 ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex flex-column align-items-center">
          {supportWay === 'give' ? (
            <Avatar src={AVATAR_LINK.others[0].image} size={120}></Avatar>
          ) : (
            <Coin color="red" scale={1.2}>
              <Avatar src={AVATAR_LINK.others[0].image}></Avatar>
            </Coin>
          )}

          <h1 className="fw-bold fs-5 mt-2">{AVATAR_LINK.others[0].name}</h1>
        </section>

        {/* 頁籤區 */}
        <section className="d-flex justify-content-center my-5">
          <Tab isActive={supportWay === 'give'} onClick={() => setSupportWay('give')}>
            送我籌碼
          </Tab>
          <Tab isActive={supportWay === 'buy'} onClick={() => setSupportWay('buy')}>
            買我籌碼
          </Tab>
        </section>

        {supportWay === 'give' ? <CoinGive /> : <RedCoinBuy />}
      </div>
    </>
  );
};

export default CoinSupportClient;
