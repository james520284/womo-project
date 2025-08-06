'use client';

import style from './MyGreenCoinHeader.module.scss';
import { useState, useEffect } from 'react';
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../ui/button/submit/Button';
import { ArrowIcon, SendIcon } from '../icons/AllIcon';

const MyGreenCoinHeader = () => {
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
          <button className="d-flex align-items-center">
            <Coin color="green" scale={0.5}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <div className="text-start ms-2">
              <h1 className="h6 fw-bold d-flex align-items-center">我的綠籌碼</h1>
              <p className="fs-sm d-flex align-items-center">
                <span>本月剩餘顆數</span>
                <span className="text-secondary fw-bold mx-2">85</span>
                <span>
                  <ArrowIcon width={20} />
                </span>
              </p>
            </div>
          </button>
          <Button color="green" size="md">
            <div className="d-flex align-items-center">
              <SendIcon width={20} />
              <span className="ms-1">發籌碼</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MyGreenCoinHeader;
