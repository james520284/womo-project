'use client';

import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import PagesHeader from '@/components/header/PagesHeader';
import style from './InformClient.module.scss';
import ArticleInform from './ArticleInform';
import GameInform from './GameInform';
import OfficialInform from './OfficialInform';

const InformClient = () => {
  const [tab, setTab] = useState<'article' | 'game' | 'official'>('article');
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="通知" />

      {/* 頁籤區 */}
      <div className={`container-fluid ${style.wrapper}`}>
        <section className="mt-8 mb-5 d-flex align-items-center">
          <Tab isActive={tab === 'article'} onClick={() => setTab('article')}>
            貼文動態
          </Tab>
          <Tab isActive={tab === 'game'} onClick={() => setTab('game')}>
            互動提醒
          </Tab>
          <Tab isActive={tab === 'official'} onClick={() => setTab('official')}>
            平台訊息
          </Tab>
        </section>

        {/* 列表區 */}
        {tab === 'article' ? (
          <ArticleInform />
        ) : tab === 'game' ? (
          <GameInform />
        ) : (
          <OfficialInform />
        )}
      </div>
    </>
  );
};

export default InformClient;
