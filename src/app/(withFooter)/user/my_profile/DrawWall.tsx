import React from 'react';
import style from './DrawWall.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IconDraw, IconLock } from '@/components/icons';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Avatar from '@/components/ui/avatar/Avatar';
import DrawPage from '@/components/draw/Draw';

const DrawWall = () => {
  const clock = ['16:21', '08:44', '03:08', '12:35'];
  return (
    <section className="mb-20">
      <div className="row g-1">
        {/* 開放區 */}
        {Array.from({ length: 9 }).map((Item, index) => (
          <div key={index} className="col-4">
            <div className="position-relative">
              <Link href="#" className={style.drawUpload}>
                {index % 2 === 0 ? (
                  <>
                    <IconDraw />
                    <span className="mt-2 fs-sm">開放塗鴉</span>
                  </>
                ) : (
                  <div className={style.imgWrapper}>
                    <Image
                      src={homeBanner[index - 1].image}
                      alt="圖1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={style.imgAuthor}>
                      <Avatar src={homeBanner[index].avatar} size={24} />
                      <span className="ms-1">限時塗鴉</span>
                    </div>
                    <span className={style.imgText}>於{clock[(index - 1) / 2]}消失</span>
                  </div>
                )}
              </Link>
            </div>
          </div>
        ))}

        {/* 未解鎖 */}
        {Array.from({ length: 1 }).map((Item, index) => (
          <div key={index} className="col-4">
            <div>
              <Link href="#" className={style.drawLock}>
                <IconLock />
                <span className="mt-2">認養小牆</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <DrawPage />
    </section>
  );
};

export default DrawWall;
