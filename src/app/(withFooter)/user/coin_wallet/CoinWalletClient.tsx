'use client';

import style from './CoinWalletClient.module.scss';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import Header from '@/components/header/Header';
import CoinWalletHeader from '@/components/header/CoinWalletHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import GreenCoinCollectList from './GreenCoinCollectList';
import RedCoinCollectList from './RedCoinCollectList';
import YellowCoinCollectList from './YellowCoinCollectList';

const CoinWalletClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'greenCoin' | 'redCoin' | 'yellowCoin'>('greenCoin');
  const [isOpenPayDetail, setIsOpenPayDetail] = useState(false);
  return (
    <>
      {/* Header區 */}
      {isMobile || isTablet ? <CoinWalletHeader /> : <Header />}

      <div className={style.wrapper}>
        {/* 頁籤區 */}
        <section className={style.walletHeader}>
          <div className={`${style.coinTab}`}>
            <button
              type="button"
              className={style.coinTabBtn}
              onClick={() => setTab('greenCoin')}
              style={{
                borderBottom: `3px solid  ${tab === 'greenCoin' ? '#000' : ' transparent'}`,
              }}
            >
              <Image src={COINS[0].image} alt={COINS[0].name} width={48} height={48} />
              <span className="text-coinGreen fw-bold fs-5">{COINS[0].amount}</span>
            </button>
            <button
              type="button"
              className={style.coinTabBtn}
              onClick={() => setTab('redCoin')}
              style={{ borderBottom: `3px solid  ${tab === 'redCoin' ? '#000' : ' transparent'}` }}
            >
              <Image src={COINS[1].image} alt={COINS[1].name} width={48} height={48} />
              <span className="text-coinRed fw-bold fs-5">{COINS[1].amount}</span>
            </button>
            <button
              type="button"
              className={style.coinTabBtn}
              onClick={() => setTab('yellowCoin')}
              style={{
                borderBottom: `3px solid  ${tab === 'yellowCoin' ? '#000' : ' transparent'}`,
              }}
            >
              <Image src={COINS[2].image} alt={COINS[2].name} width={48} height={48} />
              <span className="text-coinYellow fw-bold fs-5">{COINS[2].amount}</span>
            </button>
          </div>
        </section>

        {/* 數據區 */}
        <section className="bg-grey-50 px-5 py-8 d-flex justify-content-between align-items-center">
          {tab === 'greenCoin' ? (
            <p className="fw-bold">
              已蒐集綠籌碼：
              <span className="px-1 text-coinGreen">96</span>顆
            </p>
          ) : tab === 'redCoin' ? (
            <p className="fw-bold">
              已蒐集紅籌碼：<span className="px-1 text-coinRed">12</span>顆
            </p>
          ) : (
            <p className="fw-bold">
              剩餘金籌碼：<span className="px-1 text-coinYellow">980</span>顆
            </p>
          )}

          {tab === 'yellowCoin' && (
            <div>
              <Button color="orange" size="sm">
                儲值
              </Button>
              &nbsp;
              <ButtonOutline color="orange" size="sm" onClick={() => setIsOpenPayDetail(true)}>
                紀錄
              </ButtonOutline>
            </div>
          )}
        </section>

        {/* 列表區 */}
        {tab === 'greenCoin' ? (
          <GreenCoinCollectList />
        ) : tab === 'redCoin' ? (
          <RedCoinCollectList />
        ) : (
          <YellowCoinCollectList
            isOpenPayDetail={isOpenPayDetail}
            setIsOpenPayDetail={setIsOpenPayDetail}
          />
        )}
      </div>
    </>
  );
};

export default CoinWalletClient;
