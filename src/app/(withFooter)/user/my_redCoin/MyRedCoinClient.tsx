'use client';

import style from './MyRedCoinClient.module.scss';
import Header from '@/components/header/Header';
import MyRedCoinHeader from '@/components/header/MyRedCoinHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import { Stores } from '@/libs/api/stores';
import { IconSortUp, IconSortDown, IconAdd } from '@/components/icons';
import { Tab } from '@/components/ui/tab/Tab';

const MyRedCoinClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'support' | 'store' | 'work'>('support');
  const [isSort, setIsSort] = useState(false);

  return (
    <>
      {/* Header */}
      {isMobile || isTablet ? <MyRedCoinHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">我籌碼賺的零用錢</span>
            <span className="align-self-center fw-bold fs-5 py-2">NT$ 690</span>
            <button type="button" className={style.dataBtn}>
              提領
            </button>
          </div>
          <div className={style.section}>
            <span className="fs-sm">已經提領的零用錢</span>
            <span className="align-self-center fw-bold fs-5 py-2">NT$ 1,245</span>
            <button type="button" className={style.dataBtn}>
              帳戶
            </button>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-2 d-flex align-items-center justify-content-between">
          <div>
            <Tab
              isActive={tab === 'support'}
              onClick={() => setTab('support')}
              isShowData={true}
              num={24}
            >
              誰支持我
            </Tab>
            <Tab
              isActive={tab === 'store'}
              onClick={() => setTab('store')}
              isShowData={true}
              num={14}
            >
              我的網店
            </Tab>
            <Tab isActive={tab === 'work'} onClick={() => setTab('work')} isShowData={true} num={1}>
              我的業配
            </Tab>
          </div>
          <div className="d-flex align-items-center">
            <Search width="96px" />
            {tab === 'support' ? (
              <button type="button" className="ms-2" onClick={() => setIsSort(!isSort)}>
                {isSort ? <IconSortDown /> : <IconSortUp />}
              </button>
            ) : (
              tab === 'store' && (
                <button type="button" className="ms-2">
                  <IconAdd />
                </button>
              )
            )}
          </div>
        </section>

        {/* 列表區 */}
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
                    <span className="fw-bold mb-1">{user.name}</span>
                    <div className="d-flex  align-items-center fs-sm">
                      <p className="me-1">持有籌碼</p>
                      <Coin scale={0.25} color="red">
                        <Avatar src={AVATAR_LINK.my} />
                      </Coin>
                      <span className="ms-1 fw-bold text-primary">{user.num}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="red" size="md">
                    私聊
                  </ButtonOutline>
                </div>
              </div>
            ))}
          </section>
        ) : tab === 'store' ? (
          <section>
            {Stores.slice(0, 3).map((store) => (
              <div
                key={store.name}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <div className="d-flex  align-items-center">
                  <Avatar src={store.image} size={52} />
                  <div className="ms-2">
                    <span className="fw-bold mb-1">{store.name}</span>
                    <p className="me-1 fs-sm">平日優惠8折</p>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="red" size="md">
                    下架
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
                    <span className="fw-bold mb-1">{store.name}</span>
                    <p className="me-1 fs-sm">案件：找網紅到店玩AR</p>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="red" size="md">
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

export default MyRedCoinClient;
