'use client';

import style from './UserProfileHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import { useState, useEffect } from 'react';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import { IconArrow, IconLoveBox, IconStore } from '../icons';
import ProfileDetailSideSheet from '@/app/(withFooter)/user/my_profile/ProfileDetail/ProfileDetailSideSheet';
import ProfileDetail from '@/app/(withFooter)/user/my_profile/ProfileDetail/ProfileDetail';

const UserProfileHeader = () => {
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
        <div className="d-flex justify-content-between align-items-center py-5">
          <div className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.others[0].image} size={48} />

            <ProfileDetailSideSheet
              side="bottom"
              title="我的小檔案"
              titleHidden
              trigger={
                <div className="ms-2">
                  <h2 className="fs-6 fw-bold mb-1">{AVATAR_LINK.others[0].name}</h2>
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
            <Link href="#" className="d-flex align-items-center">
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

export default UserProfileHeader;
