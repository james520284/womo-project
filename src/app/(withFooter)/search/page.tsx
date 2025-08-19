import SearchClient from './SearchClient';
import { Suspense } from 'react';

const Search = () => {
  return (
    <Suspense>
      <SearchClient />
    </Suspense>
  );
};

export default Search;
