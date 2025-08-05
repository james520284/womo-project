import style from './CoinWalletHeader.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <button type="button" className={style.coinActionBtn}>
          <Image
            src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_give.svg?v=2"
            alt="送朋友"
            width={24}
            height={24}
          />
          <span className="ms-1 fs-sm">送朋友</span>
        </button>

        <button type="button" className={style.coinActionBtn}>
          <Image
            src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_receive.svg"
            alt="打賞我"
            width={24}
            height={24}
          />
          <span className="ms-1 fs-sm">打賞我</span>
        </button>

        <button type="button" className={style.coinActionBtn}>
          <Image
            src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_get.svg?v=2"
            alt="回謝你"
            width={24}
            height={24}
          />
          <span className="ms-1 fs-sm">回謝你</span>
        </button>
      </div>
    </header>
  );
};

export default CoinWalletHeader;
