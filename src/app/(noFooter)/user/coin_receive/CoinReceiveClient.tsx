'use client';

import style from './CoinReceiveClient.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import { Tab } from '@/components/ui/tab/Tab';
import { useState, useEffect } from 'react';
import PagesHeader from '@/components/header/PagesHeader';
import Coin from '@/components/ui/coin/Coin';
import Counter from '@/components/ui/counter/Counter';

const CoinReceiveClient = () => {
  const [donateWay, setDonateWay] = useState<'give' | 'buy'>('give');
  const [coinTab, setCoinTab] = useState<'green' | 'red' | 'yellow'>('green');
  const boxShadow = '0px 0px 5px 0px rgba(0, 0, 0, 0.25)';
  const [num, setNum] = useState<Record<string, string>>({});
  useEffect(() => {
    setNum((prev) => {
      const update = { ...prev };
      AVATAR_LINK.others.forEach((user) => {
        if (!(user.id in update)) {
          update[user.id] = '1';
        }
      });
      return update;
    });
  }, []);
  const handleChange = (id: string, newVal: string) => {
    setNum((prev) => ({ ...prev, [id]: newVal }));
  };

  return (
    <>
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
        <section className="d-flex flex-column  mt-5">
          <div className="d-flex align-items-center py-3 border-bottom">
            <Coin color="green" scale={0.6}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <div className="ms-3 flex-grow-1">
              <h2 className="fs-6 fw-bold mb-1 ">自己</h2>
              <span className="text-coinGreen fw-bold">100</span>
            </div>
          </div>
          {AVATAR_LINK.others.map((user) => (
            <div key={user.id} className="d-flex align-items-center py-3 border-bottom">
              <Coin color="green" scale={0.6}>
                <Avatar src={user.image} />
              </Coin>
              <div className="ms-3 flex-grow-1">
                <h2 className="fs-6 fw-bold mb-1 ">{user.name}</h2>
                <span className="text-coinGreen fw-bold">{user.num}</span>
              </div>
              <Counter
                value={num[user.id] ?? '1'}
                onChange={(giveme) => handleChange(String(user.id), giveme)}
                min={1}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default CoinReceiveClient;
