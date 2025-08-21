'use client';

import { IconSearch, IconCancel } from '@/components/icons';
import { useState, useEffect } from 'react';

type Props = {
  isActive?: boolean;
  className?: string;
  cancelIcon?: boolean;
  setIsSearching?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ isActive, className, cancelIcon = true, setIsSearching }: Props) => {
  const [isClick, setIsClick] = useState(isActive);
  const [value, setValue] = useState('');

  useEffect(() => {
    setIsSearching?.(value !== '');
  }, [value, setIsSearching]);
  return (
    <>
      {isClick ? (
        <div className="position-relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="我要找..."
            className={`ps-6 fw-bold  ${className}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {cancelIcon && (
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
          )}

          {!value && (
            <span className="line-height-none position-absolute top-50 start-0 translate-middle ms-3 text-muted">
              <IconSearch width={14} />
            </span>
          )}
        </div>
      ) : (
        <button type="button" className="line-height-none">
          <IconSearch width={23} onClick={() => setIsClick(!isClick)} />
        </button>
      )}
    </>
  );
};

export default Search;
