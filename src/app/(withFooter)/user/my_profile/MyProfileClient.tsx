'use client';

import style from './MyProfileClient.module.scss';
import MyProfileHeader from '@/components/header/MyProfileHeader';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import ArticleListMySelf from '@/components/ui/articleList/ArticleListMySelf';
import { Tab } from '@/components/ui/tab/Tab';
import DrawWall from './DrawWall';

const MyProfileClient = () => {
  const [tab, setTab] = useState<'post' | 'ARspace' | '24hrMsg'>('post');
  return (
    <>
      {/* Header區 */}
      <MyProfileHeader />

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">我的籌碼貼文</span>
            <span className="align-self-center fw-bold fs-5 py-2">36</span>
            <div className="ms-auto">
              <Button as="a" href="/user/create_article" color="green" size="md">
                ＋貼文
              </Button>
            </div>
          </div>
          <div className={style.section}>
            <span className="fs-sm">我的AR空間</span>
            <span className="align-self-center fw-bold fs-5 py-2">19</span>
            <div className="ms-auto">
              <Button as="a" href="/user/create_arSpace" color="red" size="md">
                ＋空間
              </Button>
            </div>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-5">
          <Tab isActive={tab === 'post'} onClick={() => setTab('post')} isShowData={true} num={36}>
            籌碼貼文
          </Tab>
          <Tab
            isActive={tab === 'ARspace'}
            onClick={() => setTab('ARspace')}
            isShowData={true}
            num={19}
          >
            AR空間
          </Tab>
          <Tab
            isActive={tab === '24hrMsg'}
            onClick={() => setTab('24hrMsg')}
            isShowData={true}
            num={9}
          >
            搶奪塗鴉
          </Tab>
        </section>

        {/* 貼文列表區 */}
        {tab !== '24hrMsg' ? <ArticleListMySelf tab={tab} /> : <DrawWall />}
      </div>
    </>
  );
};

export default MyProfileClient;
