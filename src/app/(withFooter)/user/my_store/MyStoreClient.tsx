'use client';

import PagesHeader from '@/components/header/PagesHeader';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import WoMallProducts from './WoMallProducts';
import SponsorProducts from './SponsorProducts';
import MyProducts from './MyProducts';

const MyStoreClient = () => {
  const [tab, setTab] = useState<'WoMall' | 'sponsor' | 'myself'>('WoMall');
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="我的網店" shareBtn={true} />

      <main className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
        {/* 標題區 */}
        <div className="d-flex align-items-center mb-10">
          <div>
            <Coin color="red" scale={0.8}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
          </div>
          <div className="fw-bold ms-5">
            <p className="fs-5">嗨～這裡是我的小網店</p>
            <p className="fs-6">歡迎用我的籌碼，換你喜歡的驚喜❤️</p>
          </div>
        </div>

        {/* 頁籤區 */}
        <section className="mb-8 d-flex align-items-center">
          <Tab isActive={tab === 'WoMall'} onClick={() => setTab('WoMall')}>
            平台道具
          </Tab>
          <Tab isActive={tab === 'sponsor'} onClick={() => setTab('sponsor')}>
            廣告贊助
          </Tab>
          <Tab isActive={tab === 'myself'} onClick={() => setTab('myself')}>
            我提供的
          </Tab>
        </section>

        {/* 列表區 */}
        <section className="pb-10">
          {tab === 'WoMall' ? (
            <WoMallProducts />
          ) : tab === 'sponsor' ? (
            <SponsorProducts />
          ) : (
            <MyProducts />
          )}
        </section>
      </main>
    </>
  );
};

export default MyStoreClient;
