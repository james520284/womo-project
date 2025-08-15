import style from './CoinWalletHeader.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CoinWalletHeader = () => {
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
      <div className="d-flex justify-content-around  my-3 ">
        <Link href="/user/coin_friends" className={style.coinActionBtn}>
          <Image
            src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_give.svg?v=2"
            alt="籌碼朋友"
            width={24}
            height={24}
          />
          <span className="ms-1 fs-sm">籌碼朋友</span>
        </Link>

        <Link href="/user/coin_passbook" className={style.coinActionBtn}>
          <Image
            src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_get.svg?v=2"
            alt="籌碼存摺"
            width={24}
            height={24}
          />
          <span className="ms-1 fs-sm">籌碼存摺</span>
        </Link>
      </div>
    </header>
  );
};

export default CoinWalletHeader;
