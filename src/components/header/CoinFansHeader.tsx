'use client';

import style from './CoinFansHeader.module.scss';
import { useState, useEffect } from 'react';
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../ui/button/submit/Button';
import SettingIcon from '../icons/Setting';

const CoinFansHeader = () => {
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
          <button className="btn d-flex align-items-center">
            <Coin color="green" scale={0.4}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <h1 className="h6 fw-bold ms-2">我的綠籌碼</h1>
          </button>

          <div>
            <Button color="secondary" size="small">
              送籌碼
            </Button>
            <button type="button" className="ms-2">
              <SettingIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CoinFansHeader;
