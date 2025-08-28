'use client';

import style from './MyRedCoinHeader.module.scss';
import { useState, useEffect } from 'react';
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../ui/button/submit/Button';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import { IconArrow, IconSell, IconCheckBadge } from '../icons';
import { useRouter } from 'next/navigation';
import MyRedCoinPlan from '@/app/(withFooterForUser)/user/my_redCoin/MyRedCoinPlan';
import { SideSheet } from '../ui/sideSheet/SideSheet';

const MyRedCoinHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

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
            <Coin color="red" scale={0.5}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <SideSheet
              side="bottom"
              vh={75}
              title="我的紅籌碼方案"
              titleHidden
              trigger={
                <div className="text-start ms-2">
                  <div className="d-flex align-items-center mb-1">
                    <h1 className="h6 fw-bold me-1">我的紅籌碼</h1>
                    <IconCheckBadge width={16} color="#c3c3c3" />
                  </div>
                  <p className="fs-sm d-flex align-items-center">
                    <span>每顆價格</span>
                    <span className="text-warning fw-bold ms-2 me-1">100</span>
                    <Image src={COINS[2].image} alt="金籌碼" width={20} height={20} />
                    <span className="ms-1">
                      <IconArrow width={20} />
                    </span>
                  </p>
                </div>
              }
            >
              <MyRedCoinPlan />
            </SideSheet>
          </div>

          <Button
            color="red"
            size="md"
            onClick={() => router.push(`/user/coin_support?buy=${'buy'}`)}
          >
            <div className="d-flex align-items-center">
              <IconSell width={20} />
              <span className="ms-1">賣籌碼</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MyRedCoinHeader;
