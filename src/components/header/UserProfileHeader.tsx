'use client';

import style from './UserProfileHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import { useState, useEffect } from 'react';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import { ArrowIcon, GiveCoinIcon, StoreIcon } from '../icons/AllIcon';

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
            <button className="btn d-flex align-items-center">
              <Avatar src={AVATAR_LINK.others[0].image} size={40} />
            </button>
            <Link href="#" className="h6 fw-bold ms-2 d-flex align-items-center">
              <span>朵拉公主</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="d-flex align-items-center fs-sm">
            <Link href="#" className="d-flex align-items-center">
              <GiveCoinIcon width={20} />
              <span>打賞我</span>
            </Link>
            <Link href="#" className="d-flex align-items-center ms-4">
              <StoreIcon width={20} />
              <span>我的網店</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserProfileHeader;
