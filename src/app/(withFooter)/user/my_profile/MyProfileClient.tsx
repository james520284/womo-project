'use client';

import style from './MyProfileClient.module.scss';
import MyProfileHeader from '@/components/header/MyProfileHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import ArticleList from '@/components/ui/articleList/ArticleList';

const MyProfileClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'post' | 'ARspace' | '24hrMsg'>('post');
  return (
    <>
      {isMobile || isTablet ? <MyProfileHeader /> : <Header />}

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
              <Button color="red" size="md">
                ＋空間
              </Button>
            </div>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-5">
          <button
            type="button"
            className={tab === 'post' ? style.tabBtnActive : style.tabBtn}
            onClick={() => setTab('post')}
          >
            籌碼貼文 <span className="text-grey-300 ms-1 fs-xs">36</span>
          </button>
          <button
            type="button"
            className={tab === 'ARspace' ? style.tabBtnActive : style.tabBtn}
            onClick={() => setTab('ARspace')}
          >
            AR空間 <span className="text-grey-300 ms-1 fs-xs">19</span>
          </button>
          <button
            type="button"
            className={tab === '24hrMsg' ? style.tabBtnActive : style.tabBtn}
            onClick={() => setTab('24hrMsg')}
          >
            塗鴉牆 <span className="text-grey-300 ms-1 fs-xs">69</span>
          </button>
        </section>

        {/* 貼文列表區 */}
        <ArticleList tab={tab} />
      </div>
    </>
  );
};

export default MyProfileClient;
