'use client';

import style from './MyGreenCoinHeader.module.scss';
import { useState, useEffect } from 'react';
import Coin from '../ui/coin/Coin';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../ui/button/submit/Button';
import { IconArrow, IconSend, IconCheckBadge } from '../icons';
import { useRouter } from 'next/navigation';
import MyGreenCoinPlan from '@/app/(withFooterForUser)/user/my_greenCoin/MyGreenCoinPlan';
import { SideSheet } from '../ui/sideSheet/SideSheet';

const MyGreenCoinHeader = () => {
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
            <Coin color="green" scale={0.5}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <SideSheet
              side="bottom"
              vh={75}
              title="我的綠籌碼方案"
              titleHidden
              trigger={
                <div className="text-start ms-2">
                  <div className="d-flex align-items-center mb-1">
                    <h1 className="h6 fw-bold me-1">我的綠籌碼</h1>
                    <IconCheckBadge width={16} color="#c3c3c3" />
                  </div>
                  <p className="fs-sm d-flex align-items-center">
                    <span>本月剩餘顆數</span>
                    <span className="text-secondary fw-bold mx-2">85</span>
                    <span>
                      <IconArrow width={20} />
                    </span>
                  </p>
                </div>
              }
            >
              <MyGreenCoinPlan />
            </SideSheet>
          </div>
          <Button
            color="green"
            size="md"
            onClick={() => router.push(`/user/coin_friends?isChangeToAddFriend=${true}`)}
          >
            <div className="d-flex align-items-center">
              <IconSend width={20} />
              <span className="ms-1">發籌碼</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MyGreenCoinHeader;
