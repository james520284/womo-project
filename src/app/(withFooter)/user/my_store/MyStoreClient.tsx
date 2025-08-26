'use client';

import PagesHeader from '@/components/header/PagesHeader';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import { IconAiFace, IconSticky, IconCloak } from '@/components/icons';

const MyStoreClient = () => {
  const [tab, setTab] = useState<'WoMall' | 'sponsor' | 'myself'>('WoMall');
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="我的網店" shareBtn={true} />

      <main className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
        <div className="d-flex align-items-center mb-10">
          <div>
            <Coin color="red" scale={0.8}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
          </div>
          <div className="fw-bold ms-5">
            <p className="fs-5">Hello,這裡是我的小網店</p>
            <p className="fs-6">歡迎大家用我的籌碼，換成你喜歡的東西😚</p>
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
          {/* WoMall */}
          <SectionUI>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <IconAiFace width={48} color="#e3bc41" />
                <div className="ms-3">
                  <h3 className="fw-bold fs-6 mb-1 text-coinYellow">AI面具</h3>
                  <div className="d-flex align-items-center">
                    <Coin color="red" scale={0.25}>
                      <Avatar src={AVATAR_LINK.my} />
                    </Coin>

                    <span
                      className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                      style={{ width: '24px' }}
                    >
                      10
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-start ms-5">
                <Button color="red" size="sm">
                  兌換使用
                </Button>
              </div>
            </div>
            <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
              <p>道具能力：更換自己不同的紅籌碼 AI 臉，展現不一樣的自己！</p>
            </div>
          </SectionUI>
          <SectionUI>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <IconCloak width={48} color="#e3bc41" />
                <div className="ms-3">
                  <h3 className="fw-bold fs-6 mb-1 text-coinYellow">變身斗篷</h3>
                  <div className="d-flex align-items-center">
                    <Coin color="red" scale={0.25}>
                      <Avatar src={AVATAR_LINK.my} />
                    </Coin>

                    <span
                      className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                      style={{ width: '24px' }}
                    >
                      10
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-start ms-5">
                <Button color="red" size="sm">
                  兌換使用
                </Button>
              </div>
            </div>
            <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
              <p>道具能力：讓你的籌碼覺醒，進化為獨特設計風格，展現無可取代的存在！</p>
            </div>
          </SectionUI>
          <SectionUI>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-start">
                <IconSticky width={48} color="#e3bc41" />
                <div className="ms-3">
                  <h3 className="fw-bold fs-6 mb-2 text-coinYellow">螃蟹哥貼圖</h3>
                  <div className="d-flex align-items-center">
                    <Coin color="red" scale={0.25}>
                      <Avatar src={AVATAR_LINK.my} />
                    </Coin>

                    <span
                      className="fs-6 fw-bold fs-sm text-coinRed ms-1 d-inline-block text-center"
                      style={{ width: '24px' }}
                    >
                      10
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-start ms-5">
                <Button color="red" size="sm">
                  兌換使用
                </Button>
              </div>
            </div>
            <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
              <p>道具能力：發貼文時可當作 Emoji 心情貼使用，在私聊房也能用貼圖讓聊天更有趣！</p>
            </div>
          </SectionUI>
        </section>
      </main>
    </>
  );
};

export default MyStoreClient;
