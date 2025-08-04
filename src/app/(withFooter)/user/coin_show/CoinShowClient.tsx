'use client';

import style from './CoinShowClient.module.scss';
import CoinShowHeader from '@/components/header/CoinShowHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import ViewIcon from '@/components/icons/View';
import FilterIcon from '@/components/icons/Filter';
import ARIcon from '@/components/icons/AR';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import AddPostIcon from '@/components/icons/AddPost';

const CoinShowClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'post' | 'ARspace'>('post');
  return (
    <>
      {isMobile || isTablet ? <CoinShowHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex my-10">
          <div className="d-flex flex-column align-items-center">
            <Link href="/user/my_profile" className=" position-relative">
              <div className={style.myPost}>
                <Avatar src={AVATAR_LINK.my} />
              </div>
              <span className={style.addPostIcon}>
                <AddPostIcon width={20} />
              </span>
            </Link>
            <span className="fs-xs mt-2">我的瘋碼秀</span>
          </div>
          {AVATAR_LINK.others.map((user) => (
            <div key={user.name} className="d-flex flex-column align-items-center ms-5">
              <div className={style.newPostAlarm}>
                <Avatar src={user.image} />
              </div>
              <span className="fs-xs mt-2">{user.name}</span>
            </div>
          ))}
        </section>

        {/* 頁籤區 */}
        <h2 className="mb-3 h4 fw-bold">熱門探索</h2>
        <section className="mb-5 d-flex align-items-center justify-content-between">
          <div>
            <button
              type="button"
              className={tab === 'post' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('post')}
            >
              籌碼貼文
            </button>
            <button
              type="button"
              className={tab === 'ARspace' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('ARspace')}
            >
              AR空間
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
                    </Link>
                    <div className={style.imgAuthor}>
                      <div style={{ flexShrink: 0 }}>
                        <Avatar src={img.avatar} size={24} />
                      </div>
                      <span className="ms-1">{img.author}</span>
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
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
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
                    <div className={style.imgAuthor}>
                      <div style={{ flexShrink: 0 }}>
                        <Avatar src={img.avatar} size={24} />
                      </div>
                      <span className="ms-1">{img.author}</span>
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
                    <div className={style.imgARTag}>
                      <ARIcon width={28} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CoinShowClient;
