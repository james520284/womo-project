'use client';

import style from './MyProfileHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import { useState, useEffect } from 'react';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import { IconArrow, IconLoveBox, IconStore } from '../icons';
import ProfileDetailSideSheet from '@/app/(withFooter)/user/my_profile/ProfileDetailSideSheet';
import ProfileDetail from '@/app/(withFooter)/user/my_profile/ProfileDetail';

const MyProfileHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 300) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <header className={`${style.header} ${!showHeader ? style.hidden : ''}`}>
      <div className="container-fluid">
        <div className="d-flex  align-items-center justify-content-between py-5">
          <div className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.my} size={48} />
            <ProfileDetailSideSheet
              side="bottom"
              title="我的小檔案"
              titleHidden
              trigger={
                <div className="ms-2">
                  <h2 className="fs-6 fw-bold">蒼田楓</h2>
                  <span className="fs-sm d-flex align-items-center">
                    <span className="me-1">我的小檔案</span>

                    <IconArrow width={20} />
                  </span>
                </div>
              }
            >
              <ProfileDetail />
            </ProfileDetailSideSheet>
          </div>

          <div className="d-flex align-items-center fs-sm">
            <Link href="/user/coin_support" className="d-flex align-items-center">
              <IconLoveBox width={20} />
              <span>打賞我</span>
            </Link>
            <Link href="#" className="d-flex align-items-center ms-4">
              <IconStore width={20} />
              <span>我的網店</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyProfileHeader;
