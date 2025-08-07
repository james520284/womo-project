'use client';

import style from './Search.module.scss';
import { SearchIcon, CancelIcon } from '@/components/icons/AllIcon';
import { useState } from 'react';

type Props = {
  isActive?: boolean;
  width?: string;
};

const Search = ({ isActive = false, width }: Props) => {
  const [isClick, setIsClick] = useState(isActive);
  return (
    <>
      {isClick ? (
        <>
          <span className="position-relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="關鍵字"
              className={style.search}
              style={{ width }}
            />
            <button type="button" className="position-absolute top-0 end-0 me-1">
              <CancelIcon width={20} onClick={() => setIsClick(!isClick)} />
            </button>
          </span>
        </>
      ) : (
        <button type="button" className="line-height-none">
          <SearchIcon width={28} onClick={() => setIsClick(!isClick)} />
        </button>
      )}
    </>
  );
};

export default Search;
