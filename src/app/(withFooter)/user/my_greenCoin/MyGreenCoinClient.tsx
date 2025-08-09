'use client';

import style from './MyGreenCoinClient.module.scss';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Header from '@/components/header/Header';
import MyGreenCoinHeader from '@/components/header/MyGreenCoinHeader';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import { IconSortUp, IconSortDown } from '@/components/icons';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Search from '@/components/ui/search/Search';
import { Tab } from '@/components/ui/tab/Tab';

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
        {tab === 'letter' ? (
          <section>
            {AVATAR_LINK.others.map((user) => (
              <div
                key={user.name}
                className="d-flex justify-content-between align-items-center py-3 border-bottom"
              >
                <div className="d-flex  align-items-center">
                  <Avatar src={user.image} size={52} />
                  <div className="ms-2">
                    <div className="d-flex  align-items-center">
                      <span className="fw-bold mb-1">{user.name}</span>
                      <span className="text-grey-400 fs-xs">．2天前</span>
                    </div>
                    <div className="d-flex  align-items-center fs-sm">
                      <span className="me-1">使用１顆</span>
                      <Coin scale={0.25} color="green">
                        <Avatar src={AVATAR_LINK.my} />
                      </Coin>
                      <span className="ms-1">寫信給你</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="green" size="md">
                    開信
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
                  <div className="ms-2">
                    <span className="fw-bold mb-1">{user.name}</span>
                    <span className="text-grey-400 fs-xs">．標記我們</span>
                    <div className="d-flex  align-items-center fs-sm">
                      {user.tags?.map((tag, index) => (
                        <span
                          key={`${user.id}-${index}`}
                          className="me-1 bg-grey-100 rounded p-1 fs-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonOutline color="green" size="md">
                    回標
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

export default MyGreenCoinClient;
