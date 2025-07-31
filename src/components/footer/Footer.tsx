// [本頁目的]：全域置底功能Bar

'use client';

import style from './Footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// icons
import CompassIcon from '../icons/Compass';
import WalletIcon from '../icons/Wallet';
import ChatFriendIcon from '../icons/ChatFriend';
import IncomeIcon from '../icons/Income';
// 元件
import Avatar from '../ui/avatar/Avatar';
// const
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const Footer = () => {
  const pathName = usePathname();
  return (
    <footer className={`d-lg-none  ${style.navMobile}`}>
      <ul className={`d-flex justify-content-between`}>
        <li>
          <Link
            href="/"
            className={`d-flex flex-column align-items-center ${
              pathName === '/' ? 'text-brand' : 'text-dark'
            }`}
          >
            <CompassIcon width={24} />
            <span>AR聚點</span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/coin_wallet"
            className={`d-flex flex-column align-items-center ${
              pathName === '/user/coin_wallet' ? 'text-brand' : 'text-dark'
            }`}
          >
            <WalletIcon width={24} />
            <span>籌碼包</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="d-flex flex-column align-items-center">
            <span className={style.avatar}>
              <Avatar src={AVATAR_LINK.my} size={24} />
            </span>
            <span>瘋碼秀</span>
          </Link>
        </li>
        <li>
          <Link href="/user/coin_fans" className="d-flex flex-column align-items-center">
            <ChatFriendIcon width={24} />
            <span>籌碼粉</span>
          </Link>
        </li>
        <li>
          <Link href="/user/ip_income" className="d-flex flex-column align-items-center">
            <IncomeIcon width={24} />
            <span>IP收入</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
