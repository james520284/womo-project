'use client';

import style from './MyRedCoinClient.module.scss';
import Header from '@/components/header/Header';
import MyRedCoinHeader from '@/components/header/MyRedCoinHeader';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import { IconSortUp, IconSortDown, IconAdd } from '@/components/icons';
import { Tab } from '@/components/ui/tab/Tab';
import RedCoinGameOfSupport from './RedCoinGameOfSupport';
import RedCoinGameOfStore from './RedCoinGameOfStore';
import RedCoinGameOfWork from './RedCoinGameOfWork';

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
        <section className="mb-2 d-flex align-items-center">
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
        </section>

        {/* 功能按鈕區 */}
        <div className="d-flex align-items-center justify-content-end">
          <Search />
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

        {/* 列表區 */}
        {tab === 'support' ? (
          <RedCoinGameOfSupport />
        ) : tab === 'store' ? (
          <RedCoinGameOfStore />
        ) : (
          <RedCoinGameOfWork />
        )}
      </div>
    </>
  );
};

export default MyRedCoinClient;
