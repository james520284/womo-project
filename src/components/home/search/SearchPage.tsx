'use client';

import SearchRecord from './SearchRecord';
import Searching from './Searching';
import { useState } from 'react';
import Search from '@/components/ui/search/Search';

const SearchPage = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <>
      {/*搜尋bar*/}

      <Search
        isActive={true}
        className="w-75 fs-6 border-bottom-0 bg-grey-50 rounded py-2"
        cancelIcon={false}
        setIsSearching={setIsSearching}
      />

      {/* 列表 */}
      {!isSearching ? <SearchRecord /> : <Searching />}
    </>
  );
};

export default SearchPage;
