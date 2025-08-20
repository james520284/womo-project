import React from 'react';
import style from './DrawWall.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IconDraw, IconLock } from '@/components/icons';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

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
                    <div className="d-flex align-items-center fs-xs mt-3">
                      <span className="me-1">用</span>
                      <Coin color="green" scale={0.25}>
                        <Avatar src={AVATAR_LINK.my} />
                      </Coin>
                      <span className="ms-1">塗鴉</span>
                    </div>
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
                      <span className="ms-1">在{clock[(index - 1) / 2]}消失</span>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          </div>
        ))}

        {/* 已解鎖 */}
        {/* <div className="col-4">
          <div>
            <Link href="#" className={style.drawUpload}>
              <IconDraw />
              <span className="mt-2 fs-xs">開放塗鴉</span>
            </Link>
          </div>
        </div>
        <div className="col-4">
          <div>
            <Link href="#" className={style.drawUpload}>
              <IconDraw />
              <span className="mt-2 fs-xs">開放塗鴉</span>
            </Link>
          </div>
        </div> */}

        {/* 未解鎖 */}
        {Array.from({ length: 9 }).map((Item, index) => (
          <div key={index} className="col-4">
            <div>
              <Link href="#" className={style.drawLock}>
                <IconLock />
                <div className="d-flex align-items-center fs-xs mt-3">
                  <span className="me-1">用</span>
                  <Coin color="red" scale={0.25}>
                    <Avatar src={AVATAR_LINK.my} />
                  </Coin>
                  <span className="ms-1">認領</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrawWall;
