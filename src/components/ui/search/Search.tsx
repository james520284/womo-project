'use client';

import style from './Search.module.scss';
import { IconSearch, IconCancel } from '@/components/icons';
import { useState } from 'react';

type Props = {
  isActive?: boolean;
  width?: string;
};

const Search = ({ isActive = false, width }: Props) => {
  const [isClick, setIsClick] = useState(isActive);
  const [value, setValue] = useState('');
  return (
    <>
      {isClick ? (
        <span className="position-relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="我要找..."
            className={style.search}
            style={{ width }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            className="line-height-none position-absolute top-50 end-0 translate-middle"
          >
            <IconCancel
              width={16}
              color="#757575"
              onClick={() => {
                setIsClick(!isClick);
                setValue('');
              }}
            />
          </button>
          {!value && (
            <span className="line-height-none position-absolute top-50 start-0 translate-middle ms-3 text-muted">
              <IconSearch width={14} />
            </span>
          )}
        </span>
      ) : (
        <button type="button" className="line-height-none">
          <IconSearch width={28} onClick={() => setIsClick(!isClick)} />
        </button>
      )}
    </>
  );
};

export default Search;
