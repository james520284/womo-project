'use client';

import style from './MyGreenCoinClient.module.scss';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Header from '@/components/header/Header';
import MyGreenCoinHeader from '@/components/header/MyGreenCoinHeader';
import { IconSortUp, IconSortDown } from '@/components/icons';
import Search from '@/components/ui/search/Search';
import { Tab } from '@/components/ui/tab/Tab';
import GreenCoinGameOfLetter from './GreenCoinGameOfLetter';
import GreenCoinGameOfTag from './GreenCoinGameOfTag';

const MyGreenCoinClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'letter' | 'tag'>('letter');
  const [isSort, setIsSort] = useState(false);

  return (
    <>
      {/* Header */}
      {isMobile || isTablet ? <MyGreenCoinHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">持有我籌碼的人</span>
            <span className="align-self-center fw-bold fs-5 py-2">115</span>
            <button type="button" className={style.dataBtn}>
              看看有誰
            </button>
          </div>
          <div className={style.section}>
            <span className="fs-sm">我籌碼遇到的人</span>
            <span className="align-self-center fw-bold fs-5 py-2">615</span>
            <button type="button" className={style.dataBtn}>
              隨機漂流
            </button>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-2 d-flex align-items-center justify-content-between">
          <div>
            <Tab
              isActive={tab === 'letter'}
              onClick={() => setTab('letter')}
              isShowData={true}
              num={36}
            >
              一天一信
            </Tab>
            <Tab isActive={tab === 'tag'} onClick={() => setTab('tag')} isShowData={true} num={19}>
              關係標記
            </Tab>
          </div>
          <div className=" d-flex align-items-center">
            <Search width="96px" />
            {tab === 'letter' && (
              <button type="button" className="ms-2" onClick={() => setIsSort(!isSort)}>
                {isSort ? <IconSortDown /> : <IconSortUp />}
              </button>
            )}
          </div>
        </section>

        {/* 列表區 */}
        {tab === 'letter' ? <GreenCoinGameOfLetter /> : <GreenCoinGameOfTag />}
      </div>
    </>
  );
};

export default MyGreenCoinClient;
