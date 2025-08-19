import style from './page.module.scss';
import SearchHeader from '@/components/header/SearchHeader';
import Button from '@/components/ui/button/submit/Button';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from 'antd/es/avatar/Avatar';
import { IconCancel } from '@/components/icons';

const Search = () => {
  return (
    <>
      {/* Header區 */}
      <SearchHeader />

      {/* 列表 */}
      <div className={`container-fluid mt-10 ${style.wrapper}`}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="fs-5 fw-bold">近期搜尋</h1>
          <Button color="light" size="sm">
            清除紀錄
          </Button>
        </div>
        {AVATAR_LINK.others.map((user) => (
          <div
            key={user.name}
            className="d-flex justify-content-between align-items-center py-5 border-bottom"
          >
            <div className="d-flex  align-items-start">
              <Avatar src={user.image} size={60} />
              <div className="ms-2">
                <div className="d-flex flex-column align-items-start">
                  <span className="text-grey-400 fs-xs">{user.userId}</span>
                  <span className="fw-bold">{user.name}</span>
                  <span className="bg-grey-100 rounded p-1 fs-xs">1則新貼文</span>
                </div>
              </div>
            </div>
            <div>
              <button type="button">
                <IconCancel width={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
