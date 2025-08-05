'use client';

import style from './CoinWalletClient.module.scss';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import Header from '@/components/header/Header';
import CoinWalletHeader from '@/components/header/CoinWalletHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import FilterIcon from '@/components/icons/Filter';
import DeleteIcon from '@/components/icons/Delete';
import SectionUI from '@/components/ui/section/SectionUI';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { KOLs } from '@/libs/api/kols';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Link from 'next/link';

const CoinWalletClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'greenCoin' | 'redCoin' | 'yellowCoin'>('greenCoin');
  const [isDeletableGreenCoin, setIsDeletableGreenCoin] = useState(false);
  const [isDeletableRedCoin, setIsDeletableRedCoin] = useState(false);
  return (
    <>
      {isMobile || isTablet ? <CoinWalletHeader /> : <Header />}
      <div className={style.wrapper}>
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
          <div></div>
        </section>

        <section className="bg-grey-50 px-5 py-8 d-flex justify-content-between align-items-center fs-sm">
          {tab === 'greenCoin' ? (
            <p className="fw-bold">
              綠籌碼：
              <span className="px-1 text-coinGreen">96</span>顆
            </p>
          ) : tab === 'redCoin' ? (
            <p className="fw-bold">
              紅籌碼：<span className="px-1 text-coinRed">12</span>顆
            </p>
          ) : (
            <p className="fw-bold">
              金籌碼：<span className="px-1 text-coinYellow">980</span>顆
            </p>
          )}

          {tab !== 'yellowCoin' ? (
            <div className="d-flex">
              <Search width="100px" />
              <button type="button" className="px-2 line-height-none">
                <FilterIcon width={20} />
              </button>
              <button
                type="button"
                className="line-height-none"
                onClick={() => {
                  if (tab === 'greenCoin') {
                    setIsDeletableGreenCoin(true);
                  } else {
                    setIsDeletableRedCoin(true);
                  }
                }}
              >
                <DeleteIcon width={20} />
              </button>
            </div>
          ) : (
            <div>
              <Button color="yellow" size="small">
                儲值
              </Button>
              &nbsp;
              <ButtonOutline color="yellow" size="small">
                購物
              </ButtonOutline>
            </div>
          )}
        </section>

        {tab === 'greenCoin' ? (
          <SectionUI>
            {isDeletableGreenCoin && (
              <div className="mb-5 text-center">
                <Button size="small" color="dark">
                  丟掉籌碼
                </Button>
                &nbsp;
                <Button size="small" color="light" onClick={() => setIsDeletableGreenCoin(false)}>
                  取消
                </Button>
              </div>
            )}

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
                  </Link>

                  <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">
                    {kol.name}
                  </span>
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
            {isDeletableRedCoin && (
              <div className="mb-5 text-center">
                <Button size="small" color="dark">
                  丟掉籌碼
                </Button>
                &nbsp;
                <Button size="small" color="light" onClick={() => setIsDeletableRedCoin(false)}>
                  取消
                </Button>
              </div>
            )}

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
                  </button>
                  <span className="pt-2 pb-1 text-truncate w-100 text-center fs-sm">
                    {kol.name}
                  </span>
                </div>
              ))}
            </div>
          </SectionUI>
        ) : (
          <SectionUI>
            <table className="table table-striped fs-xs no-caret">
              <thead>
                <tr>
                  <th scope="col">單號</th>
                  <th scope="col">顆數</th>
                  <th scope="col">支付(NT$)</th>
                  <th scope="col">時間</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">WM0001</th>
                  <td>3000</td>
                  <td>300</td>
                  <td>2025-10-07</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-primary">
                    NG0001
                  </th>
                  <td className="text-primary">10000</td>
                  <td className="text-primary">-1000</td>
                  <td className="text-primary">2025-10-12</td>
                  <td className="text-primary">
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">WM0002</th>
                  <td>5000</td>
                  <td>500</td>
                  <td>2025-11-15</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">WM0003</th>
                  <td>600</td>
                  <td>60</td>
                  <td>2025-12-01</td>
                  <td>
                    <Link href="#" className="text-decoration-underline">
                      查看
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </SectionUI>
        )}
      </div>
    </>
  );
};

export default CoinWalletClient;
