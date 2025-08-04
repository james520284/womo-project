// [本頁目的]：全域置頂功能Bar - UI版型1

'use client';

import style from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// icons
import CompassIcon from '../icons/Compass';
import WalletIcon from '../icons/Wallet';
import IncomeIcon from '../icons/Income';
import ChatFriendIcon from '../icons/ChatFriend';
import SearchIcon from '../icons/Search';
import BellIcon from '../icons/Bell';
import MenuIcon from '../icons/Menu';
import GiftIcon from '../icons/Gift';
// 元件
import Avatar from '../ui/avatar/Avatar';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();

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
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/" className={style.logoWrapper}>
            <Image src="/images/WOMO-LOGO1.png" alt="LOGO" fill className={style.logoImage} />
          </Link>
          <ul className={`d-none d-lg-flex justify-content-between `}>
            <li className="px-2">
              <Link
                href="#"
                className={`d-flex align-items-center ${style.headerNavLink} ${
                  pathName === '/' ? 'text-brand' : 'text-dark'
                }`}
              >
                <CompassIcon width={28} />
                <span className="ms-1">闖關</span>
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/user/coin_wallet"
                className={`d-flex align-items-center ${style.headerNavLink} ${
                  pathName === '/user/coin_wallet' ? 'text-brand' : 'text-dark'
                }`}
              >
                <WalletIcon width={28} />
                <span className="ms-1">籌碼包</span>
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/user/coin_show"
                className={`d-flex align-items-center ${style.headerNavLink}`}
              >
                <span className={style.avatar}>
                  <Avatar src={AVATAR_LINK.my} size={28} />
                </span>
                <span className="ms-1">瘋碼秀</span>
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/user/coin_fans"
                className={`d-flex align-items-center ${style.headerNavLink}`}
              >
                <ChatFriendIcon width={28} />
                <span className="ms-1">籌碼粉</span>
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/user/ip_income"
                className={`d-flex align-items-center ${style.headerNavLink}`}
              >
                <IncomeIcon width={28} />
                <span className="ms-1">斜槓</span>
              </Link>
            </li>
          </ul>
          <ul className={`d-flex py-3 ${style.headerNavUtility}`}>
            <li className="px-1">
              <Link href="#">
                <GiftIcon width={20} />
              </Link>
            </li>
            <li className="px-1">
              <Link href="#">
                <SearchIcon width={20} />
              </Link>
            </li>
            <li className="px-1">
              <Link href="#">
                <BellIcon width={20} />
              </Link>
            </li>
            <li className="px-1">
              <Link href="#">
                <MenuIcon width={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
