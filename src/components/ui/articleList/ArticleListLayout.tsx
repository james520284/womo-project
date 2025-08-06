import React from 'react';
import style from './ArticleListLayout.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import ViewIcon from '@/components/icons/View';
import ARIcon from '@/components/icons/AR';
import Avatar from '@/components/ui/avatar/Avatar';
import { ReunionBtn } from './ArticleListRowBtn';

type Props = {
  tab: string;
};

export const GridLayout = ({ tab }: Props) => {
  return (
    <>
      <section>
        <div className="row g-1">
          {homeBanner.map((img) => (
            <div key={img.id} className="col-4">
              <div className="position-relative">
                <Link href="#">
                  <div
                    className={`${style.imgWrapper} ${
                      (tab === 'ARspace' || (tab === 'post' && img.activity === '秘密')) &&
                      style.imgBlur
                    }`}
                  >
                    <Image src={img.image} alt="圖1" fill style={{ objectFit: 'cover' }} />
                  </div>

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
                  {tab === 'ARspace' && (
                    <div className={style.imgARTag}>
                      <ARIcon width={28} />
                    </div>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export const RowLayout = ({ tab }: Props) => {
  return (
    <>
      <section className="mb-20">
        <div className="row gx-3 align-items-stretch">
          {homeBanner.map((img) => (
            <React.Fragment key={img.id}>
              <div className="col-4 mb-10">
                <div className="position-relative h-100">
                  <Link href="#">
                    <div
                      className={`${style.imgWrapper} ${
                        (tab === 'ARspace' || (tab === 'post' && img.activity === '秘密')) &&
                        style.imgBlur
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
                    {tab === 'ARspace' && (
                      <div className={style.imgARTag}>
                        <ARIcon width={28} />
                      </div>
                    )}
                  </Link>
                </div>
              </div>
              <div className="col-8 mb-10">
                <div className="px-3 d-flex flex-column">
                  <div className="mb-2">
                    <div className="d-flex align-items-center mb-2">
                      <Avatar src={img.avatar} size={36} />
                      <span className="ms-1 fw-bold">{img.author}</span>
                    </div>
                    <p className={style.content}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores.
                      Rerum facere aut dicta eos doloribus minima! Est reiciendis incidunt, aperiam
                      eligendi nesciunt ipsum placeat. Omnis nisi quia eius in.
                    </p>
                    <Link href="#" className="fs-xs text-grey-500">
                      看更多
                    </Link>
                  </div>
                  <div className="mt-auto">
                    <ReunionBtn />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export const FullLayout = ({ tab }: Props) => {
  return (
    <>
      <section className="mb-20">
        <div className="row gy-3">
          {homeBanner.map((img) => (
            <React.Fragment key={img.id}>
              <div className="col-12">
                <div className="d-flex align-items-center mb-2">
                  <Avatar src={img.avatar} size={36} />
                  <span className="ms-1 fw-bold">{img.author}</span>
                </div>
                <p className={style.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores. Rerum
                  facere aut dicta eos doloribus minima! Est reiciendis incidunt, aperiam eligendi
                  nesciunt ipsum placeat. Omnis nisi quia eius in.
                </p>
                <Link href="#" className="fs-xs text-grey-500 mt-1 ">
                  看更多
                </Link>
                <div className="position-relative">
                  <Link href="#">
                    <div
                      className={`${style.imgWrapper} ${
                        (tab === 'ARspace' || (tab === 'post' && img.activity === '秘密')) &&
                        style.imgBlur
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
                    {tab === 'ARspace' && (
                      <div className={style.imgARTag}>
                        <ARIcon width={48} />
                      </div>
                    )}
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-5">
                <div>
                  <div>
                    <ReunionBtn />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
