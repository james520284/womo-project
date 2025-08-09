'use client';

import style from './CoinWalletClient.module.scss';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import Header from '@/components/header/Header';
import CoinWalletHeader from '@/components/header/CoinWalletHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import SectionUI from '@/components/ui/section/SectionUI';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { KOLs } from '@/libs/api/kols';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Link from 'next/link';
import YellowCoinPayDetail from '@/components/modal/YellowCoinPayDetail';

import {
  FilterIcon,
  DeleteIcon,
  StickyIcon,
  AiFaceIcon,
  CloakIcon,
} from '@/components/icons/AllIcon';

const CoinWalletClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'greenCoin' | 'redCoin' | 'yellowCoin'>('greenCoin');
  const [isDeletableGreenCoin, setIsDeletableGreenCoin] = useState(false);
  const [isDeletableRedCoin, setIsDeletableRedCoin] = useState(false);
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

          {tab == 'yellowCoin' && (
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
          <SectionUI>
            {/* 功能按鈕區 */}

            <div className="d-flex justify-content-end mb-5">
              {isDeletableGreenCoin && (
                <div className="d-flex align-items-center">
                  <Button color="dark" size="sm">
                    丟掉籌碼
                  </Button>
                  &nbsp;
                  <Button color="light" size="sm" onClick={() => setIsDeletableGreenCoin(false)}>
                    取消
                  </Button>
                </div>
              )}
              {!isDeletableGreenCoin && (
                <div>
                  <Search />
                  <button type="button" className="px-2 line-height-none">
                    <FilterIcon width={22} />
                  </button>
                  <button
                    type="button"
                    className="line-height-none"
                    onClick={() => {
                      if (tab === 'greenCoin') {
                        setIsDeletableGreenCoin(true);
                      }
                    }}
                  >
                    <DeleteIcon width={22} />
                  </button>
                </div>
              )}
            </div>

            {/* 綠籌碼區 */}
            <div className="row gy-10">
              {KOLs.map((kol) => (
                <div
                  key={kol.name}
                  className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-"
                >
                  {isDeletableGreenCoin && (
                    <input
                      type="checkbox"
                      name={kol.name}
                      id={kol.name}
                      className="align-self-start"
                    />
                  )}

                  <Link href="/user/user_profile/123">
                    <Coin color="green" scale={0.9}>
                      <Avatar src={kol.image} />
                    </Coin>
                    <div className="text-center">
                      <span className={style.numTag} style={{ color: '#00b0b4' }}>
                        2
                      </span>
                    </div>
                  </Link>

                  <span className="mb-1 text-truncate w-100 text-center fs-sm">{kol.name}</span>
                  <button
                    type="button"
                    className={`text-truncate ${style.badge}`}
                    style={{
                      backgroundColor: `${
                        kol.note === '本週壽星 〉'
                          ? '#EB76A1'
                          : kol.note === '要籌碼中 〉'
                          ? '#FF9149'
                          : '#1E9FF2'
                      }`,
                    }}
                  >
                    {kol.note}
                  </button>
                </div>
              ))}
            </div>
          </SectionUI>
        ) : tab === 'redCoin' ? (
          <SectionUI>
            {/* 功能按鈕區 */}
            <div className="d-flex justify-content-end mb-5">
              {isDeletableRedCoin && (
                <div className="d-flex align-items-center">
                  <Button color="dark" size="sm">
                    丟掉籌碼
                  </Button>
                  &nbsp;
                  <Button color="light" size="sm" onClick={() => setIsDeletableRedCoin(false)}>
                    取消
                  </Button>
                </div>
              )}
              {!isDeletableRedCoin && (
                <div>
                  <Search />
                  <button type="button" className="px-2 line-height-none">
                    <FilterIcon width={22} />
                  </button>
                  <button
                    type="button"
                    className="line-height-none"
                    onClick={() => {
                      if (tab === 'redCoin') {
                        setIsDeletableRedCoin(true);
                      }
                    }}
                  >
                    <DeleteIcon width={22} />
                  </button>
                </div>
              )}
            </div>
            {/* 紅籌碼區 */}
            <div className="row gy-10">
              {KOLs.map((kol) => (
                <div
                  key={kol.name}
                  className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start"
                >
                  {isDeletableRedCoin && (
                    <input
                      type="checkbox"
                      name={kol.name}
                      id={kol.name}
                      className="align-self-start"
                    />
                  )}
                  <button type="button">
                    <Coin color="red" scale={0.9}>
                      <Avatar src={kol.image} />
                    </Coin>
                    <div className="text-center">
                      <span className={style.numTag} style={{ color: '#d3745d' }}>
                        2
                      </span>
                    </div>
                  </button>
                  <span className="pb-1 text-truncate w-100 text-center fs-sm">{kol.name}</span>
                </div>
              ))}
            </div>
          </SectionUI>
        ) : (
          <SectionUI>
            <div className="row gy-10">
              <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                {isDeletableRedCoin && <input type="checkbox" className="align-self-start" />}
                <button type="button">
                  <AiFaceIcon width={52} color="#e3bc41" />
                </button>
                <div className="text-center">
                  <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                    25
                  </span>
                </div>
                <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">AI換臉</span>
              </div>
              <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                {isDeletableRedCoin && <input type="checkbox" className="align-self-start" />}
                <button type="button">
                  <CloakIcon width={52} color="#e3bc41" />
                </button>
                <div className="text-center">
                  <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                    60
                  </span>
                </div>
                <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">隱形斗篷</span>
              </div>
              <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                {isDeletableRedCoin && <input type="checkbox" className="align-self-start" />}
                <button type="button">
                  <StickyIcon width={52} color="#e3bc41" />
                </button>
                <div className="text-center">
                  <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                    100
                  </span>
                </div>
                <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">螃蟹哥貼圖</span>
              </div>
              <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                {isDeletableRedCoin && <input type="checkbox" className="align-self-start" />}
                <button type="button">
                  <AiFaceIcon width={52} color="#e3bc41" />
                </button>
                <div className="text-center">
                  <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                    150
                  </span>
                </div>
                <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">虛寶X</span>
              </div>
              <div className="col-4 col-lg-3 d-flex flex-column align-items-center justify-content-start">
                {isDeletableRedCoin && <input type="checkbox" className="align-self-start" />}
                <button type="button">
                  <CloakIcon width={52} color="#e3bc41" />
                </button>
                <div className="text-center">
                  <span className={style.numTagGold} style={{ color: '#e3bc41' }}>
                    200
                  </span>
                </div>
                <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">虛寶Y</span>
              </div>
            </div>
          </SectionUI>
        )}
      </div>
      {/* 彈跳視窗區 */}
      {/* 儲值明細 */}
      <YellowCoinPayDetail open={isOpenPayDetail} onOpenChange={setIsOpenPayDetail} />
    </>
  );
};

export default CoinWalletClient;
