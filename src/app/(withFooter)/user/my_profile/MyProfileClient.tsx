'use client';

import style from './MyProfileClient.module.scss';
import MyProfileHeader from '@/components/header/MyProfileHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import ViewIcon from '@/components/icons/View';
import FilterIcon from '@/components/icons/Filter';
import ARIcon from '@/components/icons/AR';
import Button from '@/components/ui/button/submit/Button';
import GridViewIcon from '@/components/icons/GridView';
import ListViewIcon from '@/components/icons/ListView';
import FullscreenIcon from '@/components/icons/Fullscreen';

const MyProfileClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'post' | 'ARspace' | '24hrMsg'>('post');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'full'>('grid');
  return (
    <>
      {isMobile || isTablet ? <MyProfileHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 數據區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">籌碼貼文</span>
            <span className="align-self-center fw-bold fs-5 py-2">36</span>
            <div className="ms-auto">
              <Button color="green" size="small">
                ＋貼文
              </Button>
            </div>
          </div>
          <div className={style.section}>
            <span className="fs-sm">AR空間</span>
            <span className="align-self-center fw-bold fs-5 py-2">19</span>
            <div className="ms-auto">
              <Button color="red" size="small">
                ＋空間
              </Button>
            </div>
          </div>
        </section>

        {/* 頁籤區 */}
        <section className="mb-2">
          <div>
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
          </div>

          <div className="d-flex align-items-center justify-content-between mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <button
                type="button"
                className={`mx-1 line-height-none ${
                  viewMode === 'grid' ? 'text-dark' : 'text-grey-300'
                }`}
                onClick={() => {
                  setViewMode('grid');
                }}
              >
                <GridViewIcon width={20} />
              </button>
              <button
                type="button"
                className={`mx-1 line-height-none ${
                  viewMode === 'list' ? 'text-dark' : 'text-grey-300'
                }`}
                onClick={() => {
                  setViewMode('list');
                }}
              >
                <ListViewIcon width={20} />
              </button>
              <button
                type="button"
                className={`mx-1 line-height-none ${
                  viewMode === 'full' ? 'text-dark' : 'text-grey-300'
                }`}
                onClick={() => {
                  setViewMode('full');
                }}
              >
                <FullscreenIcon width={20} />
              </button>
            </div>
            <button type="button" className="line-height-none">
              <FilterIcon width={20} />
            </button>
          </div>
        </section>

        {/* 列表區 */}
        {tab === 'post' ? (
          <section className="mb-20">
            <div className="row g-1">
              {homeBanner.map((img) => (
                <div key={img.id} className="col-4">
                  <div className="position-relative">
                    <Link href="#">
                      <div
                        className={`${style.imgWrapper} ${
                          img.activity === '秘密' ? style.imgBlur : ''
                        }`}
                      >
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

export default MyProfileClient;
