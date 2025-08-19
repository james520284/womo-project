'use client';

import style from './SearchHeader.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IconBackArrow } from '../icons';
import Search from '../ui/search/Search';

const SearchHeader = () => {
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
        <div className="d-flex align-items-center gap-2 py-5">
          <button type="button" className="line-height-none" onClick={() => router.back()}>
            <IconBackArrow width={20} />
          </button>
          <div className="flex-grow-1">
            <Search isActive={true} className="fs-5 border-bottom-0 bg-grey-50 rounded" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
