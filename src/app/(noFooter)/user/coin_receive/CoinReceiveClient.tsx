'use client';

import style from './CoinReceiveClient.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import { Tab } from '@/components/ui/tab/Tab';
import { useState, useEffect } from 'react';
import PagesHeader from '@/components/header/PagesHeader';
import GreenCoinCounter from './GreenCoinCounter';

const CoinReceiveClient = () => {
  const [donateWay, setDonateWay] = useState<'give' | 'buy'>('give');
  const [coinTab, setCoinTab] = useState<'green' | 'red' | 'yellow'>('green');
  const boxShadow = '0px 0px 5px 0px rgba(0, 0, 0, 0.25)';

  return (
    <>
      {/* Header區 */}
      <PagesHeader />

      <div className={`container-fluid mt-5 mb-20 ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex flex-column align-items-center">
          <Avatar src={AVATAR_LINK.my} size={120}></Avatar>
          <h1 className="fw-bold fs-5 mt-2">蒼田楓</h1>
        </section>

        {/* 頁籤區 */}
        <section className="d-flex justify-content-center mt-5">
          <Tab isActive={donateWay === 'give'} onClick={() => setDonateWay('give')}>
            送我籌碼
          </Tab>
          <Tab isActive={donateWay === 'buy'} onClick={() => setDonateWay('buy')}>
            買我籌碼
          </Tab>
        </section>

        {/* 籌碼頁籤區 */}
        <section className="d-flex justify-content-center mt-5">
          <button
            type="button"
            className={style.coinTab}
            style={{
              boxShadow: `${coinTab === 'green' ? boxShadow : ''}`,
              opacity: `${coinTab === 'green' ? '1' : '.5'}`,
            }}
            onClick={() => setCoinTab('green')}
          >
            <div key={COINS[0].name} className={style.imgWrapper}>
              <Image src={COINS[0].image} alt={COINS[0].name} fill className={style.img} />
            </div>
            <span className="mt-3 text-coinGreen fw-bold">綠籌碼</span>
          </button>

          <button
            type="button"
            className={style.coinTab}
            style={{
              boxShadow: `${coinTab === 'red' ? boxShadow : ''}`,
              opacity: `${coinTab === 'red' ? '1' : '.5'}`,
            }}
            onClick={() => setCoinTab('red')}
          >
            <div key={COINS[1].name} className={style.imgWrapper}>
              <Image src={COINS[1].image} alt={COINS[1].name} fill className={style.img} />
            </div>
            <span className="mt-3 text-coinRed fw-bold">紅籌碼</span>
          </button>

          <button
            type="button"
            className={style.coinTab}
            style={{
              boxShadow: `${coinTab === 'yellow' ? boxShadow : ''}`,
              opacity: `${coinTab === 'yellow' ? '1' : '.5'}`,
            }}
            onClick={() => setCoinTab('yellow')}
          >
            <div key={COINS[2].name} className={style.imgWrapper}>
              <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
            </div>
            <span className="mt-3 text-coinYellow fw-bold">金籌碼</span>
          </button>
        </section>

        {/* 數量區 */}
        <GreenCoinCounter />
      </div>
    </>
  );
};

export default CoinReceiveClient;
