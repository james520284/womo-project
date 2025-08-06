'use client';

import style from './UserProfileClient.module.scss';
import UserProfileHeader from '@/components/header/UserProfileHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import ArticleList from '@/components/ui/articleList/ArticleList';

const UserProfileClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'post' | 'ARspace' | '24hrMsg'>('post');
  return (
    <>
      {isMobile || isTablet ? <UserProfileHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 籌碼使用區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">我持有你的</span>
            <div className="d-flex align-items-center justify-content-center py-2">
              <Coin scale={0.4} color="green">
                <Avatar src={AVATAR_LINK.others[0].image} />
              </Coin>
              <span className="fw-bold fs-5 text-secondary ms-2">48</span>
            </div>
            <div className="ms-auto">
              <Button color="green" size="md">
                使用
              </Button>
            </div>
          </div>
          <div className={style.section}>
            <span className="fs-sm">我持有你的</span>
            <div className="d-flex align-items-center justify-content-center py-2">
              <Coin scale={0.4} color="red">
                <Avatar src={AVATAR_LINK.others[0].image} />
              </Coin>
              <span className="fw-bold fs-5 text-primary ms-2">9</span>
            </div>
            <div className="ms-auto">
              <Button color="red" size="md">
                使用
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

export default UserProfileClient;
