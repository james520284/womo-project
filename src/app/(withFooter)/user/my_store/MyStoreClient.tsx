'use client';

import PagesHeader from '@/components/header/PagesHeader';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';

const MyStoreClient = () => {
  const [tab, setTab] = useState<'WoMall' | 'sponsor' | 'myself'>('WoMall');
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="儲值金籌碼" />

      <main className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
        {/* 頁籤區 */}
        <section className="mb-5 d-flex align-items-center">
          <Tab isActive={tab === 'WoMall'} onClick={() => setTab('WoMall')}>
            WoMall
          </Tab>
          <Tab isActive={tab === 'sponsor'} onClick={() => setTab('sponsor')}>
            品牌贊助
          </Tab>
          <Tab isActive={tab === 'myself'} onClick={() => setTab('myself')}>
            我自己的
          </Tab>
        </section>

        {/* 列表區 */}
        <section className="mb-5 d-flex align-items-center">
          {/* 一天一信 */}
          <SectionUI>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <div className="d-flex align-items-center">
                  <Coin color="green" scale={0.5}>
                    <Avatar src={AVATAR_LINK.my} />
                  </Coin>
                  <span
                    className="fs-5 fw-bold fs-sm text-coinGreen ms-2 d-inline-block text-center"
                    style={{ width: '24px' }}
                  >
                    1
                  </span>
                </div>
                <div className="ms-5">
                  <h3 className="fw-bold fs-6 mb-2">悄悄話</h3>
                  <p>用我的籌碼，寄一封悄悄話給我，讓我們再靠近一點🥰 </p>
                  <span className="text-muted mt-1 fs-xs">#一天限寄一封</span>
                </div>
              </div>
              <div className="text-start ms-5">
                <Button color="green" size="sm">
                  碼上寄
                </Button>
              </div>
            </div>
          </SectionUI>
        </section>
      </main>
    </>
  );
};

export default MyStoreClient;
