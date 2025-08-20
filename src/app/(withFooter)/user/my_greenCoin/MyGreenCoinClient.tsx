'use client';

import style from './MyGreenCoinClient.module.scss';
import { useState } from 'react';
import MyGreenCoinHeader from '@/components/header/MyGreenCoinHeader';
import { IconSortUp, IconSortDown } from '@/components/icons';
import Search from '@/components/ui/search/Search';
import { Tab } from '@/components/ui/tab/Tab';
import GreenCoinGameOfLetter from './GreenCoinGameOfLetter';
import GreenCoinGameOfTag from './GreenCoinGameOfTag';

const MyGreenCoinClient = () => {
  const [tab, setTab] = useState<'letter' | 'tag'>('letter');
  const [isSort, setIsSort] = useState(false);

  return (
    <>
      {/* Header */}
      <MyGreenCoinHeader />

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">持有我籌碼的人</span>
            <span className="align-self-center fw-bold fs-5 py-2">115</span>
            <button type="button" className={style.dataBtn}>
              開彈幕速聊
            </button>
          </div>
          <div className={style.section}>
            <span className="fs-sm">我籌碼遇到的人</span>
            <span className="align-self-center fw-bold fs-5 py-2">615</span>
            <button type="button" className={style.dataBtn}>
              漂流瓶邂逅
            </button>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-2 d-flex align-items-center">
          <div>
            <Tab
              isActive={tab === 'letter'}
              onClick={() => setTab('letter')}
              isShowData={true}
              num={36}
            >
              悄悄話
            </Tab>
            <Tab isActive={tab === 'tag'} onClick={() => setTab('tag')} isShowData={true} num={19}>
              關係標記
            </Tab>
          </div>
        </section>

        {/* 功能按鈕區 */}
        <section className=" d-flex align-items-center justify-content-end">
          <Search />
          {tab === 'letter' && (
            <button type="button" className="ms-2" onClick={() => setIsSort(!isSort)}>
              {isSort ? <IconSortDown /> : <IconSortUp />}
            </button>
          )}
        </section>

        {/* 列表區 */}
        {tab === 'letter' ? <GreenCoinGameOfLetter /> : <GreenCoinGameOfTag />}
      </div>
    </>
  );
};

export default MyGreenCoinClient;
