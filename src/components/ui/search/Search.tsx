import style from './Search.module.scss';
import SearchIcon from '@/components/icons/Search';

type Props = {
  width?: string;
};

const Search = ({ width }: Props) => {
  return (
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
  );
};

export default Search;
