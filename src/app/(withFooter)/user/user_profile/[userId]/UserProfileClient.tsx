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
import ArticleListUserSelf from '@/components/ui/articleList/ArticleListUserSelf';
import { IconCart, IconGift } from '@/components/icons';
import Link from 'next/link';
import { Tab } from '@/components/ui/tab/Tab';

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
            <div className="d-flex align-items-center justify-content-between">
              <span className="fs-sm">我持有你的</span>
              <button className={style.iconWrapper}>
                <IconGift width={24} color="#00b0b4" />
              </button>
            </div>
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
            <div className="d-flex align-items-center justify-content-between">
              <span className="fs-sm">我持有你的</span>
              <Link href="#" className={style.iconWrapper}>
                <IconCart width={24} color="#da5271" />
              </Link>
            </div>
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
            num={67}
          >
            塗鴉牆
          </Tab>
        </section>

        {/* 貼文列表區 */}
        {tab !== '24hrMsg' && <ArticleListUserSelf tab={tab} />}
      </div>
    </>
  );
};

export default UserProfileClient;
