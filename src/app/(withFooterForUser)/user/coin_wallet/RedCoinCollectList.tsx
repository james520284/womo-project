'use client';

import style from './CoinWalletClient.module.scss';
import { KOLs } from '@/libs/api/kols';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';
import SectionUI from '@/components/ui/section/SectionUI';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import Button from '@/components/ui/button/submit/Button';
import { IconFilter, IconDelete } from '@/components/icons';
import Link from 'next/link';

const RedCoinCollectList = () => {
  const [isDeletable, setIsDeletable] = useState(false);

  return (
    <SectionUI>
      {/* 功能按鈕區 */}
      <div className="d-flex justify-content-end mb-5">
        {isDeletable && (
          <div className="d-flex align-items-center">
            <Button color="dark" size="sm">
              丟掉籌碼
            </Button>
            &nbsp;
            <Button color="light" size="sm" onClick={() => setIsDeletable(false)}>
              取消
            </Button>
          </div>
        )}
        {!isDeletable && (
          <div className="d-flex align-items-center">
            <Search />

            <button type="button" className="px-2 line-height-none">
              <IconFilter width={22} />
            </button>
            <button
              type="button"
              className="line-height-none"
              onClick={() => {
                setIsDeletable(true);
              }}
            >
              <IconDelete width={22} />
            </button>
          </div>
        )}
      </div>
      {/* 列表區 */}
      <div className="row gy-10">
        {KOLs.map((kol) => (
          <div key={kol.name} className="col-4 col-lg-3 d-flex flex-column align-items-center">
            {isDeletable && (
              <div>
                <input type="checkbox" name={kol.name} id={kol.name} />
              </div>
            )}

            <Link
              href={!isDeletable ? '/user/user_profile/123' : '#'}
              className={isDeletable ? style.linkDisabled : ''}
            >
              <Coin color="red" scale={0.9}>
                <Avatar src={kol.image} />
              </Coin>
              <div className="text-center">
                <span className={style.numTag} style={{ color: '#d3745d' }}>
                  2
                </span>
              </div>
            </Link>
            <span className="pb-1 text-truncate w-100 text-center fs-sm">{kol.name}</span>
          </div>
        ))}
      </div>
    </SectionUI>
  );
};

export default RedCoinCollectList;
