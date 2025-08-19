'use client';

import SearchHeader from '@/components/header/SearchHeader';
import SearchRecord from './SearchRecord';
import Searching from './Searching';
import { useState } from 'react';

const SearchClient = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <>
      {/* Header區 */}
      <SearchHeader setIsSearching={setIsSearching} />

      {/* 列表 */}
      {!isSearching ? <SearchRecord /> : <Searching />}
    </>
  );
};

export default SearchClient;
