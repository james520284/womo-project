'use client';

import style from './CoinFriendsClient.module.scss';
import CoinFriendsHeader from '@/components/header/CoinFriendsHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import FriendsList from './FriendsList';
import Search from '@/components/ui/search/Search';
import { TabDataOnClick } from '@/components/ui/tab/Tab';

const CoinFriendsClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [isChange, setIsChange] = useState(false);
  const [tab, setTab] = useState<'all' | 'iHave' | 'youHave'>('all');

  return (
    <>
      {/* Header區 */}
      {isMobile || isTablet ? (
        <CoinFriendsHeader isChange={isChange} setIsChange={setIsChange} />
      ) : (
        <Header />
      )}

      {/* 頁籤區 */}
      <section className="mt-8">
        <div className="mb-5 d-flex align-items-center">
          <TabDataOnClick
            isActive={tab === 'all'}
            onClick={() => setTab('all')}
            num={777}
            unit="人"
          >
            全部
          </TabDataOnClick>
          <TabDataOnClick
            isActive={tab === 'youHave'}
            onClick={() => setTab('youHave')}
            num={520}
            unit="人"
          >
            對方有我籌碼
          </TabDataOnClick>
          <TabDataOnClick
            isActive={tab === 'iHave'}
            onClick={() => setTab('iHave')}
            num={257}
            unit="人"
          >
            我有對方籌碼
          </TabDataOnClick>
        </div>
      </section>

      {/* 功能按鈕區 */}
      <div className="d-flex justify-content-end">
        <Search isActive={true} />
      </div>

      {/* 列表區 */}
      <div className={`container-fluid ${style.wrapper}`}>
        <FriendsList tab={tab} />
      </div>
    </>
  );
};

export default CoinFriendsClient;
