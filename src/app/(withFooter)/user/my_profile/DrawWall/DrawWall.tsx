import React from 'react';
import style from './DrawWall.module.scss';
import Image from 'next/image';
import { IconDraw, IconLock, IconMoreImage } from '@/components/icons';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Avatar from '@/components/ui/avatar/Avatar';
import DrawPage from '@/components/draw/Draw';
import DrawWallFreeStep1 from './DrawWallFreeStep1';
import DrawWallPayStep1 from './DrawWallPayStep1';
import { SideSheet } from '@/components/sideSheet/SideSheet';

const DrawWall = () => {
  const clock = ['16:21', '08:44', '03:08', '12:35'];
  return (
    <section className="mb-20">
      <div className="row g-1">
        {/* 開放區 */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="col-4">
            <div className="position-relative">
              {index % 2 === 0 ? (
                <SideSheet
                  side="bottom"
                  title="推爆貼文"
                  titleHidden
                  trigger={
                    <button className={style.drawUpload}>
                      <IconDraw />
                      <span className="mt-2 fs-sm">開放塗鴉</span>
                    </button>
                  }
                >
                  <DrawWallFreeStep1 />
                </SideSheet>
              ) : (
                <div className={style.imgWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1695381517206-2be6c8adce33?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="圖1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={style.imgAuthor}>
                    <Avatar src={homeBanner[index].avatar} size={24} />
                    <span className="ms-1">正在塗鴉聊</span>
                  </div>
                  <div className={style.imgText}>
                    <span>
                      <IconMoreImage width={14} />
                      <span className="ms-1">32</span>
                    </span>
                    <span>{clock[(index - 1) / 2]}消失</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* 未解鎖 */}
        {Array.from({ length: 1 }).map((Item, index) => (
          <div key={index} className="col-4">
            <SideSheet
              side="bottom"
              title="推爆貼文"
              titleHidden
              trigger={
                <button type="button" className={style.drawLock}>
                  <IconLock />
                  <span className="mt-2">認養小牆</span>
                </button>
              }
            >
              <DrawWallPayStep1 />
            </SideSheet>
          </div>
        ))}
      </div>
      <DrawPage />
    </section>
  );
};

export default DrawWall;
