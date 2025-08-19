'use client';

import style from './CoinPassbookClient.module.scss';
import PagesHeader from '@/components/header/PagesHeader';
import Image from 'next/image';
import { COINS } from '@/constants/coin';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import GetRecord from './GetRecord';
import UseRecord from './UseRecord';

const CoinPassbookClient = () => {
  const [tab, setTab] = useState<'getRecord' | 'useRecord'>('getRecord');

  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="籌碼存摺" />
      <div className={style.wrapper}>
        {/* 數據區 */}
        <section className={style.walletHeader}>
          <div className={`${style.coinTab}`}>
            <div className={style.coinTabBtn}>
              <Image src={COINS[0].image} alt={COINS[0].name} width={48} height={48} />
              <span className="text-coinGreen fw-bold fs-5">{COINS[0].amount}</span>
            </div>
            <div className={style.coinTabBtn}>
              <Image src={COINS[1].image} alt={COINS[1].name} width={48} height={48} />
              <span className="text-coinRed fw-bold fs-5">{COINS[1].amount}</span>
            </div>
            <div className={style.coinTabBtn}>
              <Image src={COINS[2].image} alt={COINS[2].name} width={48} height={48} />
              <span className="text-coinYellow fw-bold fs-5">{COINS[2].amount}</span>
            </div>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-5 d-flex align-items-center">
          <Tab isActive={tab === 'getRecord'} onClick={() => setTab('getRecord')}>
            獲得紀錄
          </Tab>
          <Tab isActive={tab === 'useRecord'} onClick={() => setTab('useRecord')}>
            使用紀錄
          </Tab>
        </section>

        {/* 列表區 */}
        {tab === 'getRecord' ? <GetRecord /> : <UseRecord />}
      </div>
    </>
  );
};

export default CoinPassbookClient;
