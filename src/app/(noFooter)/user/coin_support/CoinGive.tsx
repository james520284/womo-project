'use client';

import style from './CoinGive.module.scss';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import { useState } from 'react';
import GreenCoinCounter from './GreenCoinCounter';
import RedCoinCounter from './RedCoinCounter';
import YellowCoinCounter from './YellowCoinCounter';

const CoinGive = () => {
  const [coinTab, setCoinTab] = useState<'green' | 'red' | 'yellow'>('green');
  const boxShadow = '0px 0px 5px 0px rgba(0, 0, 0, 0.25)';

  return (
    <>
      {/* 籌碼頁籤區 */}
      <section className="d-flex justify-content-center mb-5">
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
      {coinTab === 'green' ? (
        <GreenCoinCounter />
      ) : coinTab === 'red' ? (
        <RedCoinCounter />
      ) : (
        <YellowCoinCounter />
      )}

      {/* 送出鍵 */}
      <button type="submit" className={style.submitBtn}>
        送出
      </button>
    </>
  );
};

export default CoinGive;
