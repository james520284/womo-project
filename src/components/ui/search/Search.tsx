'use client';

import style from './Search.module.scss';
import { SearchIcon } from '@/components/icons/AllIcon';
import { useState } from 'react';

type Props = {
  width?: string;
};

const Search = ({ width }: Props) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      {isClick ? (
        <>
          <div className="position-relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="搜尋"
              className={style.search}
              style={{ width }}
            />
            <button type="button" className="position-absolute top-0 end-0 me-1">
              <SearchIcon width={20} />
            </button>
          </div>
        </>
      ) : (
        <button type="button" className="line-height-none">
          <SearchIcon width={20} onClick={() => setIsClick(!isClick)} />
        </button>
      )}
    </>
  );
};

export default Search;
