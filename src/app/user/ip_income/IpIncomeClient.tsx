'use client';

import style from './IpIncomeClient.module.scss';
import Header from '@/components/header/Header';
import IpIncomeHeader from '@/components/header/IpIncomeHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import SortUpIcon from '@/components/icons/SortUp';
import SortDownIcon from '@/components/icons/SortDown';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import { Stores } from '@/libs/api/stores';

const IpIncomeClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'support' | 'work'>('support');
  const [isSort, setIsSort] = useState(false);

  return (
    <>
      {isMobile || isTablet ? <IpIncomeHeader /> : <Header />}
      <div className={`container-fluid ${style.wrapper}`}>
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">本月收入 NT$</span>
            <span className="align-self-center fw-bold fs-5 py-2">6,900</span>
            <button type="button" className={style.dataBtn}>
              提領
            </button>
          </div>
          <div className={style.section}>
            <span className="fs-sm">累積收入 NT$</span>
            <span className="align-self-center fw-bold fs-5 py-2">124,500</span>
            <button type="button" className={style.dataBtn}>
              分析
            </button>
          </div>
        </section>

        <section className="mb-2">
          <div className="mb-2">
            <button
              type="button"
              className={tab === 'support' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('support')}
            >
              誰支持我
            </button>
            <button
              type="button"
              className={tab === 'work' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('work')}
            >
              品牌業配
            </button>
          </div>

          <div className="d-flex align-items-center  justify-content-end">
            <Search width="96px" />
            {tab === 'support' && (
              <button type="button" className="ms-1" onClick={() => setIsSort(!isSort)}>
                {isSort ? <SortDownIcon /> : <SortUpIcon />}
              </button>
            )}
          </div>
        </section>

        {tab === 'support' ? (
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
                      <Coin scale={0.25} color="red">
                        <Avatar src={AVATAR_LINK.my} />
                      </Coin>
                      <span className="ms-1 fw-bold text-primary">{user.num}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="primary" size="small">
                    私聊
                  </ButtonOutline>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section>
            {Stores.slice(0, 3).map((store) => (
              <div
                key={store.name}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <div className="d-flex  align-items-center">
                  <Avatar src={store.image} size={52} />
                  <div className="ms-2">
                    <span className="fw-bold">{store.name}</span>
                    <p className="me-1">案件：找網紅到店玩AR</p>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="primary" size="small">
                    接案
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

export default IpIncomeClient;
