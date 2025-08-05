'use client';

import style from './UserProfileClient.module.scss';
import UserProfileHeader from '@/components/header/UserProfileHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import ViewIcon from '@/components/icons/View';
import FilterIcon from '@/components/icons/Filter';
import ARIcon from '@/components/icons/AR';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';

const UserProfileClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'post' | 'ARspace' | '24hrMsg'>('post');
  return (
    <>
      {isMobile || isTablet ? <UserProfileHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
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
              <Button color="green" size="small">
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
              <Button color="red" size="small">
                使用
              </Button>
            </div>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-5 d-flex align-items-center justify-content-between">
          <div>
            <button
              type="button"
              className={tab === 'post' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('post')}
            >
              籌碼貼文 <span className="text-grey-300 ms-1 fs-xs">22</span>
            </button>
            <button
              type="button"
              className={tab === 'ARspace' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('ARspace')}
            >
              AR空間 <span className="text-grey-300 ms-1 fs-xs">13</span>
            </button>
            <button
              type="button"
              className={tab === '24hrMsg' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('24hrMsg')}
            >
              塗鴉牆 <span className="text-grey-300 ms-1 fs-xs">69</span>
            </button>
          </div>

          <button type="button" className="line-height-none">
            <FilterIcon width={20} />
          </button>
        </section>

        {/* 列表區 */}
        {tab === 'post' ? (
          <section className="mb-20">
            <div className="row g-1">
              {homeBanner.map((img) => (
                <div key={img.id} className="col-4">
                  <div className="position-relative">
                    <Link href="/user/article_view/123">
                      <div
                        className={`${style.imgWrapper} ${
                          img.activity === '秘密' ? style.imgBlur : ''
                        }`}
                      >
                        <Image src={img.image} alt="圖1" fill style={{ objectFit: 'cover' }} />
                      </div>

                      <div className={style.imgText}>
                        <div className="d-flex align-items-center">
                          <ViewIcon width={20} />
                          <span className="ms-1">{img.view}</span>
                        </div>
                        <span>
                          <span>#</span>
                          {img.activity}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : tab === 'ARspace' ? (
          <section className="mb-20">
            <div className="row g-1">
              {homeBanner.map((img) => (
                <div key={img.id} className="col-4">
                  <div className="position-relative">
                    <Link href="#">
                      <div className={`${style.imgWrapper} ${style.imgBlur}`}>
                        <Image src={img.image} alt="圖1" fill style={{ objectFit: 'cover' }} />
                      </div>
                    </Link>
                    <div className={style.imgText}>
                      <div className="d-flex align-items-center">
                        <ViewIcon width={20} />
                        <span className="ms-1">{img.view}</span>
                      </div>
                      <span>
                        <span>#</span>
                        {img.activity}
                      </span>
                    </div>
                    <div className={style.imgARTag}>
                      <ARIcon width={28} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default UserProfileClient;
