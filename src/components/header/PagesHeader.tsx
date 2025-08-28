'use client';

import style from './PagesHeader.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  IconBackArrow,
  IconShare,
  IconCancel,
  IconFriendsList,
  IconAddFriend,
  IconAdd,
} from '../icons';

type Props = {
  titleType: 'txt' | 'img';
  titleTxt?: string;
  imageSrc?: string;
  imageLink?: string;

  // 內部按鈕
  backArrowBtn?: boolean;
  shareBtn?: boolean;
  cancelBtn?: boolean;
  friendBtn?: boolean;
  searchBtn?: boolean;
  addBtn?: boolean;

  // 外部傳入當前狀態
  currentState?: boolean;

  // 外部傳入的事件處理器
  onAddClick?: () => void;
  onFriendClick?: () => void;
};

const PagesHeader = ({
  titleType = 'txt',
  titleTxt,
  imageSrc,
  imageLink,
  backArrowBtn = true,
  shareBtn,
  cancelBtn,
  friendBtn,
  addBtn,
  currentState,
  onAddClick,
  onFriendClick,
}: Props) => {
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
        <div
          className={`d-flex  align-items-center py-3 ${
            titleType === 'txt' ? 'justify-content-between' : 'justify-content-center'
          }`}
        >
          <div className="d-flex align-items-center gap-2">
            {backArrowBtn && (
              <button type="button" className="line-height-none" onClick={() => router.back()}>
                <IconBackArrow width={20} />
              </button>
            )}

            {titleType === 'txt' ? (
              <h1 className="fs-6 fw-bold">{titleTxt}</h1>
            ) : (
              <Link href={`${imageLink}`} className={style.logoWrapper}>
                <Image src={`${imageSrc}`} alt="LOGO" fill className={style.logoImage} />
              </Link>
            )}
          </div>

          <div className="d-flex align-items-center gap-2">
            {shareBtn && (
              <button type="button" className="line-height-none">
                <IconShare width={20} />
              </button>
            )}
            {cancelBtn && (
              <button type="button" className="line-height-none" onClick={() => router.back()}>
                <IconCancel width={24} />
              </button>
            )}
            {addBtn && (
              <button type="button" className="line-height-none" onClick={onAddClick}>
                <IconAdd width={24} />
              </button>
            )}
            {friendBtn && (
              <button type="button" className="line-height-none" onClick={onFriendClick}>
                {currentState ? <IconFriendsList width={20} /> : <IconAddFriend width={20} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
