'use client';

import style from './CoinShow.module.scss';
import { useState } from 'react';
import ArticleList from '../ui/articleList/ArticleList';
import { Tab } from '../ui/tab/Tab';

const CoinShow = () => {
  const [tab, setTab] = useState<'post' | 'ARspace'>('post');

  return (
    <div className={`container-fluid ${style.wrapper}`}>
      <h2 className="mb-3 h4 fw-bold">熱門探索</h2>

      {/* 頁籤區 */}
      <section className="mb-5">
        <Tab isActive={tab === 'post'} onClick={() => setTab('post')}>
          籌碼貼文
        </Tab>
        <Tab isActive={tab === 'ARspace'} onClick={() => setTab('ARspace')}>
          AR空間
        </Tab>
      </section>

      {/* 貼文列表區 */}
      <ArticleList tab={tab} />
    </div>
  );
};

export default CoinShow;
