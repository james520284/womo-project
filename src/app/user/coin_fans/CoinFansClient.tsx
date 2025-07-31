'use client';

import style from './CoinFansClient.module.scss';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Header from '@/components/header/Header';
import CoinFansHeader from '@/components/header/CoinFansHeader';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import SortUpIcon from '@/components/icons/SortUp';
import SortDownIcon from '@/components/icons/SortDown';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Search from '@/components/ui/search/Search';

const CoinFansClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'now' | 'past'>('now');
  const [isSort, setIsSort] = useState(false);

  return (
    <>
      {isMobile || isTablet ? <CoinFansHeader /> : <Header />}
      <div className={`container-fluid ${style.wrapper}`}>
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">持有人數</span>
            <span className="align-self-center fw-bold fs-5 py-2">11.5K</span>
            <button type="button" className={style.dataBtn}>
              呼叫粉絲
            </button>
          </div>
          <div className={style.section}>
            <span className="fs-sm">流通顆數</span>
            <span className="align-self-center fw-bold fs-5 py-2">24.7K</span>
            <button type="button" className={style.dataBtn}>
              加強推廣
            </button>
          </div>
        </section>

        <section className="mb-2">
          <div className="mb-2">
            <button
              type="button"
              className={tab === 'now' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('now')}
            >
              現有的粉絲
            </button>
            <button
              type="button"
              className={tab === 'past' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('past')}
            >
              曾經的粉絲
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <Search width="96px" />
            {tab === 'now' && (
              <button type="button" className="ms-1" onClick={() => setIsSort(!isSort)}>
                {isSort ? <SortDownIcon /> : <SortUpIcon />}
              </button>
            )}
          </div>
        </section>

        {tab === 'now' ? (
          <section>
            {AVATAR_LINK.others.map((user) => (
              <div
                key={user.name}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <div className="d-flex  align-items-center">
                  <Avatar src={user.image} size={52} />
                  <div className="ms-2">
                    <span className="fw-bold">{user.name}</span>
                    <div className="d-flex  align-items-center">
                      <p className="me-1">持有籌碼</p>
                      <Coin scale={0.25} color="green">
                        <Avatar src={AVATAR_LINK.my} />
                      </Coin>
                      <span className="ms-1 fw-bold text-secondary">{user.num}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="secondary" size="small">
                    送籌碼
                  </ButtonOutline>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section>
            {AVATAR_LINK.others.map((user) => (
              <div
                key={user.name}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <div className="d-flex  align-items-center">
                  <Avatar src={user.image} size={52} />

                  <span className="fw-bold ms-2">{user.name}</span>
                </div>
                <div>
                  <ButtonOutline color="secondary" size="small">
                    送籌碼
                  </ButtonOutline>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default CoinFansClient;
