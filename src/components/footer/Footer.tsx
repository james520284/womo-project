// [本頁目的]：全域置底功能Bar

'use client';

import style from './Footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconWallet, IconChatFriend, IconIncome, IconShow } from '../icons';
import Avatar from '../ui/avatar/Avatar';
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
            <IconShow width={24} />
            <span>瘋碼秀</span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/coin_wallet"
            className={`d-flex flex-column align-items-center ${
              pathName === '/user/coin_wallet' ? 'text-brand' : 'text-dark'
            }`}
          >
            <IconWallet width={24} />
            <span>籌碼包</span>
          </Link>
        </li>
        <li>
          <Link href="/user/my_profile" className="d-flex flex-column align-items-center">
            <span
              className={style.avatar}
              style={{
                outline: `${pathName === '/user/my_profile' ? '2px solid #da5271' : ''}`,
              }}
            >
              <Avatar src={AVATAR_LINK.my} size={24} />
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/my_greenCoin"
            className={`d-flex flex-column align-items-center ${
              pathName === '/user/my_greenCoin' ? 'text-brand' : 'text-dark'
            }`}
          >
            <IconChatFriend width={24} />
            <span>我們倆</span>
          </Link>
        </li>
        <li>
          <Link
            href="/user/my_redCoin"
            className={`d-flex flex-column align-items-center ${
              pathName === '/user/my_redCoin' ? 'text-brand' : 'text-dark'
            }`}
          >
            <IconIncome width={24} />
            <span>玩斜槓</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
